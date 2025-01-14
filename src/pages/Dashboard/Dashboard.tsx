import styles from "./dashboard.module.scss";
import classNames from "classnames";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ListFilter, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { UserRecord } from "../../types";
import { testData } from "./data";

const Dashboard = () => {
  const [, setData] = useState<UserRecord[] | null>(null);
  const [ranges, setRanges] = useState<UserRecord[][]>([]);
  const [currentRange, setCurrentRange] = useState<UserRecord[] | null>(null);
  const [currentPage, setCurrentPage] = useState(5);

  const itemsPerPage = 10;
  const totalPages = Math.ceil((currentRange?.length || 0) / itemsPerPage);
  const paginatedData = currentRange?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const metrics = [
    { title: "USERS", count: "2,453", icon: "👥" },
    { title: "ACTIVE USERS", count: "2,453", icon: "✨" },
    { title: "USERS WITH LOANS", count: "12,453", icon: "💰" },
    { title: "USERS WITH SAVINGS", count: "102,453", icon: "💳" },
  ];

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchRecord = async (): Promise<UserRecord[]> => {
      try {
        // const data = await fetch(`${apiUrl}`, {
        //   method: "GET",
        // });
        // const response: UserRecord[] = await data.json();
        const data = testData;
        const response: UserRecord[] = data.map((user) => ({
          organization: "Unknown",
          username: user.username,
          email: user.email,
          phone: user.phone_number,
          dateJoined: user.date_joined,
          status: user.status,
        }));

        localStorage.setItem("usersRecord", JSON.stringify(response));

        // contains 100 records in each chunk array
        const chunked: UserRecord[][] = [];
        for (let i = 0; i < response.length; i += 100) {
          chunked.push(response.slice(i, i + 100));
        }

        setData(response); // Complete dataset
        setRanges(chunked); // Chunked ranges
        setCurrentRange(chunked[0] || []); // Set default range to first chunk

        return response;
      } catch (error) {
        throw new Error("An error occurred while fetching data");
      }
    };

    fetchRecord();
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Lendsqr Dashboar</title>
      </Helmet>
      <section>
        <div className={classNames(styles.container)}>
          <Sidebar />

          <div className={styles.dashboard}>
            <h1>Users</h1>
            <div className={styles.metrics}>
              {metrics.map((metric, index) => (
                <div className={styles.metriCard} key={index}>
                  <span className="icon">{metric.icon}</span>
                  <h3>{metric.title}</h3>
                  <p>{metric.count}</p>
                </div>
              ))}
            </div>

            <div className={styles.tableContainer}>
              <table>
                <thead>
                  <tr>
                    <th>
                      <div className="flex gap-1">
                        ORGANIZATION{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        USERNAME{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        EMAIL{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        PHONE{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        DATE JOINED{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className="flex gap-1">
                        STATUS{" "}
                        <button>
                          <ListFilter size="1rem" color="#545F7D" />
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData?.map((user, index) => (
                    <tr key={index}>
                      <td>{user.organization}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.dateJoined}</td>
                      <td>
                        <span
                          className={classNames(
                            styles.status,
                            `${user.status.toLowerCase()}`
                          )}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <button className={styles.moreBtn}>
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={classNames(styles.pagination, "padding-1")}>
              <div className="flexCenter gap-1">
                <span>Showing</span>
                <select
                  id="rangeSelect"
                  className={styles.perPage}
                  onChange={(e) => {
                    setCurrentRange(ranges[parseInt(e.target.value)]);
                    setCurrentPage(1);
                  }}
                >
                  {ranges.map((_, index) => (
                    <option key={index} value={index}>
                      {`${index * 100}-${index * 100 + 99}`}
                    </option>
                  ))}
                </select>

                <span>out of 100</span>
              </div>
              <div className={styles.pageNumbers}>
                <button
                  className={styles.prev}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    //TODO: This class should be active on the button that is currently selected
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="next"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
