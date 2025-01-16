import styles from "./dashboard.module.scss";
import { ListFilter } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { testData } from "./data";
import FilterForm from "../../components/FilterForm/FilterForm";
import ClickAwayListener from "react-click-away-listener";
import PaginationComp from "../../components/PaginationComp/PaginationComp";
import PaginatedData from "../../components/PaginatedData/PaginatedData";
import metrics from "./metrics";
import { UserRecord } from "../../types";

const Dashboard = () => {
  const [data, setData] = useState<UserRecord[] | null>(null);
  const [ranges, setRanges] = useState<UserRecord[][]>([]);
  const [currentRange, setCurrentRange] = useState<UserRecord[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalPages = Math.ceil((currentRange?.length || 0) / itemsPerPage);
  const paginatedData = currentRange?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filterActive = () => {
    setIsFilterActive(!isFilterActive);
  };
  const handleClickAway = () => {
    setIsFilterActive(false);
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchRecord = async (): Promise<UserRecord[]> => {
      try {
        const data = await fetch(`${apiUrl}`, {
          method: "GET",
        });
        const response: UserRecord[] = await data.json();
        localStorage.setItem("usersRecord", JSON.stringify(response));

        if(!response || response.length === 0 || !localStorage.getItem("usersRecord")) {
          throw new Error("No data found");
        }else {
          // const usersRecord: UserRecord[] = response.map((user) => ({
          //   id: user.id.toString(),
          //   organization: user.organization as "lendsqr" | "irorun" | "lendstar",
          //   username: user.username,
          //   first_name: user.first_name,
          //   last_name: user.last_name,
          //   email: user.email,
          //   phone_number: user.phone_number,
          //   date_joined: user.date_joined,
          //   status: user.status as
          //     | "active"
          //     | "inactive"
          //     | "blacklisted"
          //     | "pending",
          //   level_education: user.level_education,
          //   guarantor: user.guarantor,
          //   guarantor_number: user.guarantor_number,
          //   guarantor_relationship: user.guarantor_relationship,
          //   children: user.children,
          //   gender: user.gender as "male" | "female",
          //   marital_status: user.marital_status,
          //   guarantor_email: user.guarantor_email,
          // }));
          setData(response);

          const chunked: UserRecord[][] = [];
          for (let i = 0; i < response.length; i += 100) {
            chunked.push(response.slice(i, i + 100));
          }
          setData(response);
          setRanges(chunked);
          setCurrentRange(chunked[0]); // Set default range to first chunk
  
          return response;
        }
        


      } catch (error) {
        throw new Error("An error occurred while fetching data");
      }
    };

    fetchRecord();
  }, []);

  return (
    <>
      <Helmet>
        <title>Lendsqr Dashboard</title>
      </Helmet>
      <div className={styles.dashboard}>
        <h1>Users</h1>
        <div className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div className={styles.metriCard} key={index}>
              <div
                style={{
                  backgroundColor: metric.backgroundCol,
                  display: "inline-block",
                  padding: ".7rem",
                  borderRadius: "50%",
                }}
                className="flexCenter"
              >
                <span className="icon" aria-label={metric.title}>
                  <img src={metric.icon} alt="users metric icon" />
                </span>
              </div>
              <h3>{metric.title}</h3>
              <p>{metric.count}</p>
            </div>
          ))}
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.tableWrapper}>
            <div className={styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="flex gap-1">
                        <span>ORGANIZATION</span>{" "}
                        <button
                          aria-label="Filter by organization"
                          onClick={filterActive}
                        >
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        USERNAME{" "}
                        <button aria-label="Filter by username">
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        EMAIL{" "}
                        <button aria-label="Filter by email">
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        PHONE{" "}
                        <button aria-label="Filter by phone">
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        <span
                          style={{
                            width: "5rem",
                          }}
                        >
                          DATE JOINED
                        </span>{" "}
                        <button aria-label="Filter by date joined">
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        STATUS{" "}
                        <button aria-label="Filter by status">
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData?.map((user) => (
                    <PaginatedData
                      key={user.id}
                      user={user}
                      activeUserId={activeUserId}
                      setActiveUserId={setActiveUserId}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {isFilterActive && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <div>{isFilterActive && <FilterForm />}</div>
            </ClickAwayListener>
          )}
        </div>

        {/* Pagination control */}
        <PaginationComp
          currentPage={currentPage}
          ranges={ranges}
          setCurrentPage={setCurrentPage}
          setCurrentRange={setCurrentRange}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default Dashboard;
