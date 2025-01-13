import styles from "./dashboard.module.scss";
import classNames from "classnames";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section>
      <div className={classNames(styles.container)}>
        <Sidebar />

        <div className={styles.dashboard}></div>
      </div>
    </section>
  );
};

export default Dashboard;
