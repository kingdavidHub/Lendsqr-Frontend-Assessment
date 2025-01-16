import styles from "./Error.module.scss";
import LogoIcon from "../../assets/lendsqr.svg";
import { Link } from "react-router";

const Error = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={LogoIcon} alt="Lendsqr logo" />
          <h1>This page can't be found</h1>

          <div className={styles.buttonContainer}>
            <Link to="/">
              <button>Login</button>
            </Link>

            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error;
