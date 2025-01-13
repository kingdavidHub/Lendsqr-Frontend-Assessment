import { ChevronDown } from "lucide-react";
import Briefcase from "../../assets/sidebarIcon/briefcase.svg";
import HomeIcon from "../../assets/sidebarIcon/home.svg";
import userFriendsIcon from "../../assets/sidebarIcon/user-friends.svg";
import { useId } from "react";
import classNames from "classnames";
import styles from "./sidebar.module.scss";


type HeadingListProps = {
  headingIcon: string;
  headingTitle: string;
};
type SidebarProps = Array<{ heading: string; headingList: HeadingListProps[] }>;

const sidebar: SidebarProps[] = [
  [
    {
      heading: "Customers",
      headingList: [
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Users",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Guarantors",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Loans",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Decision Models",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Savings",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Loan Requests",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Whitelist",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Karma",
        },
      ],
    },
  ],

  [
    {
      heading: "Business",
      headingList: [
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Organization",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Loan Products",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Savings Products",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Fees and Charges",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Transactions",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Services",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Service Account",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Settlements",
        },
      ],
    },
  ],
  [
    {
      heading: "Settings",
      headingList: [
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Preferences",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: " Fees and Pricing",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Audit Logs",
        },
      ],
    },
  ],
];


const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
          <div className="innerWidth flexCol gap-2">
            <div
              className={classNames(styles.organization, "flex padding-left-1")}
            >
              <img src={Briefcase} alt="" />
              <span className="secondaryText">Switch Organization</span>
              <ChevronDown color="#213f7d" />
            </div>

            <div className="innerWidth flexStart gap-1 padding-left-1">
              <img src={HomeIcon} alt="" />
              <span className="secondaryText">Dashboard</span>
            </div>
          </div>

          {sidebar.map((innerItem) => {
            return innerItem.map((item, index) => (
              <SideBarDetails key={Math.random() * index} {...item} />
            ));
          })}
        </div>
  )
}


function SideBarDetails({
  heading,
  headingList,
}: {
  heading: string;
  headingList: HeadingListProps[];
}) {
  const generateKey = useId();

  return (
    <div className="innerWidth margin-1 flexColStart gap-1">
      <p className="uppercase secondaryText font-size-xs padding-left-1">
        {heading}
      </p>
      <ul className="innerWidth flexColStart gap-0">
        {headingList.map(({ headingIcon, headingTitle }) => (
          <li
            key={`${generateKey}-list`}
            className={classNames(styles.sidebarList, "innerWidth")}
          >
            <a
              className={classNames(
                styles.sidebarHighLight,
                "secondaryText padding-left-1  innerWidth display-block"
              )}
            >
              {headingTitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar