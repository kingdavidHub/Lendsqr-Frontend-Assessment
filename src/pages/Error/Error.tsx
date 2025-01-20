import styles from "./Error.module.scss";
import LogoIcon from "../../assets/lendsqr.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section data-testid="error-page" className={styles.wrapper}>
      <div className={styles.container}>
        <img src={LogoIcon} alt="Lendsqr logo" />
        <h2 data-testid="error-heading">This page can't be found</h2>

        <div className={styles.buttonContainer}>
          <Link to="/">
            <button data-testid="login-button">Login</button>
          </Link>

          <Link to="/dashboard">
            <button data-testid="dashboard-button">Dashboard</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Error;
