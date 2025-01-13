import styles from "./dashboard.module.scss";
import classNames from "classnames";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MoreVertical } from "lucide-react";

const Dashboard = () => {
  const metrics = [
    { title: "USERS", count: "2,453", icon: "👥" },
    { title: "ACTIVE USERS", count: "2,453", icon: "✨" },
    { title: "USERS WITH LOANS", count: "12,453", icon: "💰" },
    { title: "USERS WITH SAVINGS", count: "102,453", icon: "💳" },
  ];

  const users = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    // Add more user data here
  ];

  return (
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
                  <th>ORGANIZATION</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  <th>DATE JOINED</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
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

            <div className={styles.pagination}>
              <select className={styles.perPage}>
                <option>100</option>
              </select>
              <div className={styles.pageNumbers}>
                <button className={styles.prev}>←</button>
                <button className={styles.active}>1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>15</button>
                <button>16</button>
                <button className="next">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
