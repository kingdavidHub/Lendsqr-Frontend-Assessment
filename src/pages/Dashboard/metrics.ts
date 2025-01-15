import MetricUser from "../../assets/metric/metricsUser.svg";
import ActiveUser from "../../assets/metric/activeUser.svg";
import UserLoan from "../../assets/metric/userLoan.svg";
import UserSavings from "../../assets/metric/userSavings.svg";

const metrics = [
    {
      title: "USERS",
      count: "2,453",
      icon: MetricUser,
      backgroundCol: "rgb(223 24 255 / 21%)",
    },
    {
      title: "ACTIVE USERS",
      count: "2,453",
      icon: ActiveUser,
      backgroundCol: "rgb(87 24 255 / 21%)",
    },
    {
      title: "USERS WITH LOANS",
      count: "12,453",
      icon: UserLoan,
      backgroundCol: "rgb(245 95 68 / 21%)",
    },
    {
      title: "USERS WITH SAVINGS",
      count: "102,453",
      icon: UserSavings,
      backgroundCol: "rgb(255 51 102 / 21%)",
    },
  ];

  export default metrics;