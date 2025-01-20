import {
  Bell,
  Search,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";
import styles from "./navbar.module.scss";
import { Link } from "react-router";
import lendsqrIcon from "../../assets/lendsqr.svg";
import profileIcon from "../../assets/img/profileIcon.png";
import dropDown from "../../assets/dropdown.svg";
import classnames from "classnames";
import { useResize } from "../../hooks/useResize";
import classNames from "classnames";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";
import { ToggleContextType } from "../../types";

export default function Navbar() {
  const [windowsSize] = useResize();
  const { width }: { width: number } = windowsSize;
  const { toggle, setToggle } = useContext(ToggleContext) as ToggleContextType;

  return (
    <header>
      <nav className={styles.navbar} role="navigation" data-testid="navbar">
        <div className={classNames(styles.logo, "flex gap-1")}>
          {width < 1024 && (
            <button
              onClick={() => setToggle((prev) => !prev)}
              aria-label={toggle ? "Close menu" : "Open menu"}
            >
              {toggle ? (
                <SquareChevronLeft color="#213f7d" />
              ) : (
                <SquareChevronRight color="#213f7d" />
              )}
            </button>
          )}

          <img src={lendsqrIcon} alt="Lendsqr Logo" width={120} height={30} />
        </div>

        {width >= 1024 && (
          <div className={styles.searchContainer} role="search">
            <input
              type="text"
              placeholder="Search for anything"
              className={styles.searchInput}
              aria-label="Search input"
            />
            <button className={styles.searchButton} aria-label="Search button">
              <Search className={styles.searchIcon} />
            </button>
          </div>
        )}

        <div className={styles.rightSection}>
          <Link to="/docs" className={styles.docs} aria-label="Docs">
            Docs
          </Link>
          <button className={styles.notifications} aria-label="Notifications">
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
              <button className={styles.dropdown} aria-label="Profile dropdown">
                <img src={dropDown} alt="Dropdown icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
