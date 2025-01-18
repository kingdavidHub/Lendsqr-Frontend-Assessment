import MetricUser from "../../assets/metric/metricsUser.svg";
import ActiveUser from "../../assets/metric/activeUser.svg";
import UserLoan from "../../assets/metric/userLoan.svg";
import UserSavings from "../../assets/metric/userSavings.svg";
import CountUp from "react-countup";

const metrics = [
  {
    title: "USERS",
    count: <CountUp start={2400} end={2453} duration={2} />,
    icon: MetricUser,
    backgroundCol: "rgb(223 24 255 / 21%)",
  },
  {
    title: "ACTIVE USERS",
    count: <CountUp start={2400} end={2453} duration={2} />,
    icon: ActiveUser,
    backgroundCol: "rgb(87 24 255 / 21%)",
  },
  {
    title: "USERS WITH LOANS",
    count: <CountUp start={12400} end={12453} duration={2} />,
    icon: UserLoan,
    backgroundCol: "rgb(245 95 68 / 21%)",
  },
  {
    title: "USERS WITH SAVINGS",
    count: <CountUp start={102400} end={102453} duration={2} />,
    icon: UserSavings,
    backgroundCol: "rgb(255 51 102 / 21%)",
  },
];

export default metrics;