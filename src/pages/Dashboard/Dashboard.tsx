import styles from "./dashboard.module.scss";
import { ListFilter } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FilterForm from "../../components/FilterForm/FilterForm";
import ClickAwayListener from "react-click-away-listener";
import PaginationComp from "../../components/PaginationComp/PaginationComp";
import PaginatedData from "../../components/PaginatedData/PaginatedData";
import metrics from "./metrics";
import { UserRecord } from "../../types";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import { chunkCurrentData, formatDate } from "../../utils";

const Dashboard = () => {
  const [data, setData] = useState<UserRecord[] | null>(null);
  const [ranges, setRanges] = useState<UserRecord[][]>([]);
  const [currentRange, setCurrentRange] = useState<UserRecord[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
        setLoading(true);
        const data = await fetch(`${apiUrl}`, {
          method: "GET",
        });

        const response: UserRecord[] = await data.json();
        if (!response || response.length === 0) {
          throw new Error("No data found");
        } else {
          const result: UserRecord[] = response.map((item) => {
            return {
              ...item,
              date_joined: formatDate(item.date_joined),
            };
          });

          localStorage.setItem("usersRecord", JSON.stringify(result));
          setData(result);
          setLoading(false);

          const chunked = chunkCurrentData(result);
          setRanges(chunked);
          setCurrentRange(chunked[0]); // Set default range to first chunk

          return result;
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
                      <div
                        className={classNames(styles.tableFix, "flex gap-0")}
                      >
                        <TableHead
                          filterActive={filterActive}
                          title="organization"
                          ariaLabel="Filter By organization"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-0">
                        <TableHead
                          filterActive={filterActive}
                          title="username"
                          ariaLabel="Filter by username"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-0">
                        <TableHead
                          filterActive={filterActive}
                          title="email"
                          ariaLabel="Filter by email"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-0">
                        <TableHead
                          filterActive={filterActive}
                          title="phone"
                          ariaLabel="Filter by phone"
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-0">
                        <TableHead
                          filterActive={filterActive}
                          title="Date "
                          ariaLabel="Filter by date"
                          style={{ width: "5rem" }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-0">
                        <TableHead
                          filterActive={filterActive}
                          title="Status "
                          ariaLabel="Filter by status"
                        />
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
                  {loading
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index}>
                          <td colSpan={7}>
                            <Skeleton />
                          </td>
                        </tr>
                      ))
                    : paginatedData?.map((user) => (
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
              <div>
                {isFilterActive && (
                  <FilterForm
                    setData={setData}
                    data={data}
                    setCurrentRange={setCurrentRange}
                    setRanges={setRanges}
                  />
                )}
              </div>
            </ClickAwayListener>
          )}
        </div>

        {/* Pagination control */}
        <PaginationComp
          currentPage={currentPage}
          ranges={ranges}
          loading={loading}
          setCurrentPage={setCurrentPage}
          isFilterActive={isFilterActive}
          setCurrentRange={setCurrentRange}
          totalPages={totalPages}
          data-testid="pagination-container"
        />
      </div>
    </>
  );
};

const TableHead = ({
  filterActive,
  title,
  ariaLabel,
  style,
}: {
  title: string;
  ariaLabel: string;
  filterActive: () => void;
  style?: object;
}) => {
  return (
    <>
      <span className="display-inline-block" style={style}>
        {title.toUpperCase()}
      </span>{" "}
      <button aria-label={ariaLabel} onClick={filterActive}>
        <ListFilter size="1rem" color="#545F7D" />
      </button>
    </>
  );
};

export default Dashboard;
