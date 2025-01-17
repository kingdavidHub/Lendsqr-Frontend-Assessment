import { ChevronDown } from "lucide-react";
import Briefcase from "../../assets/sidebarIcon/briefcase.svg";
import HomeIcon from "../../assets/sidebarIcon/home.svg";
import { useContext } from "react";
import classNames from "classnames";
import styles from "./sidebar.module.scss";
import { ToggleContext } from "../../context/ToggleContext";
import { sidebar } from "../../data";
import { HeadingListProps } from "../../types";
import { v4 as uuidv4 } from "uuid";
import ClickAwayListener from "react-click-away-listener";

const Sidebar = () => {
  const toggle = useContext(ToggleContext)?.toggle;
  const setToggle = useContext(ToggleContext)?.setToggle;

  function handleClickAway(){
    if(typeof setToggle !== "undefined"){
      setToggle(false);
    }
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classNames(styles.sidebar, toggle ? styles.active : "")}>
      <div className="innerWidth flexCol gap-2">
        <div className={classNames(styles.organization, "flex padding-left-1")}>
          <img
            src={Briefcase}
            alt="Briefcase Icon"
            aria-label="Switch Organization"
          />
          <span className="secondaryText">Switch Organization</span>
          <ChevronDown color="#213f7d" aria-label="Expand" />
        </div>

        <div className="innerWidth flexStart gap-1 padding-left-1">
          <img src={HomeIcon} alt="Home Icon" aria-label="Dashboard" />
          <span className="secondaryText">Dashboard</span>
        </div>
      </div>

      <div className="innerWidth margin-1 flexColStart gap-1">
        {sidebar.map((innerItem) => {
          return innerItem.map((item) => (
            <SideBarDetails key={uuidv4()} {...item} />
          ));
        })}
      </div>
    </div>
    </ClickAwayListener>
  );
};

function SideBarDetails({
  heading,
  headingList,
}: {
  heading: string;
  headingList: HeadingListProps[];
}) {
  return (
    <>
      <p className="uppercase secondaryText font-size-xs padding-left-1">
        {heading}
      </p>
      <ul className="innerWidth flexColStart gap-0">
        {headingList.map(({ headingIcon, headingTitle }) => (
          <li
            key={uuidv4()}
            className={classNames(styles.sidebarList, "innerWidth")}
          >
            <a
              className={classNames(
                styles.sidebarHighLight,
                "secondaryText padding-left-1  innerWidth display-block"
              )}
              aria-label={headingTitle}
            >
              <span className="flexStart gap-1">
                <img
                  className="display-inline-block"
                  src={headingIcon}
                  alt=""
                />
                {headingTitle}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
