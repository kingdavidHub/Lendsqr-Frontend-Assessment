import { Bell, Search } from "lucide-react";
import styles from "./navbar.module.scss";
import { Link } from "react-router";
import lendsqrIcon from "../../assets/lendsqr.svg";
import profileIcon from "../../assets/img/profileIcon.png";
import dropDown from "../../assets/dropdown.svg";
import classnames from "classnames";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={lendsqrIcon} alt="Lendsqr Logo" width={120} height={30} />
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <Search className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.rightSection}>
          <Link to="/docs" className={styles.docs}>
            Docs
          </Link>
          <button className={styles.notifications}>
            <Bell />
          </button>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img
                src={profileIcon}
                alt="Profile"
                width={32}
                height={32}
                className={styles.avatarImage}
              />
            </div>
            <div className={classnames(styles.profileNav, "flex profileIcon")}>
              <span className={styles.username}>Adedeji</span>{" "}
              <button className={styles.dropdown}>
                <img src={dropDown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
