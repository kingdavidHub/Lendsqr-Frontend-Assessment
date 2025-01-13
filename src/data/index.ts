import { SidebarProps } from "../types";
import userFriendsIcon from "../assets/sidebarIcon/user-friends.svg";
import DecisionModels from "../assets/sidebarIcon/DecisionModels.svg";
// import savingsIcon from "../assets/sidebarIcon/savings.svg";
// import loanRequestsIcon from "../assets/sidebarIcon/loanRequests.svg";
import whitelistIcon from "../assets/sidebarIcon/whitelist.svg";
import karmaIcon from "../assets/sidebarIcon/karma.svg";
import organizationIcon from "../assets/sidebarIcon/briefcase1.svg";

// import loanProductsIcon from "../assets/sidebarIcon/loans.svg";

// import savingsProductsIcon from "../assets/sidebarIcon/savingsProducts.svg";
import feesChargesIcon from "../assets/sidebarIcon/feesCharges.svg";
// import transactionsIcon from "../assets/sidebarIcon/transactions.svg";
import servicesIcon from "../assets/sidebarIcon/services.svg";
import serviceAccountIcon from "../assets/sidebarIcon/serviceAccount.svg";
import settlementsIcon from "../assets/sidebarIcon/settlements.svg";
// import preferencesIcon from "../assets/sidebarIcon/preferences.svg";
// import feesPricingIcon from "../assets/sidebarIcon/feesPricing.svg";
import auditLogsIcon from "../assets/sidebarIcon/auditLogs.svg";



export const sidebar: SidebarProps[] = [
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
          headingIcon: DecisionModels,
          headingTitle: "Decision Models",
        },
        {
          headingIcon: DecisionModels,
          headingTitle: "Savings",
        },
        {
          headingIcon: DecisionModels,
          headingTitle: "Loan Requests",
        },
        {
          headingIcon: whitelistIcon,
          headingTitle: "Whitelist",
        },
        {
          headingIcon: karmaIcon,
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
          headingIcon: organizationIcon,
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
          headingIcon: feesChargesIcon,
          headingTitle: "Fees and Charges",
        },
        {
          headingIcon: userFriendsIcon,
          headingTitle: "Transactions",
        },
        {
          headingIcon: servicesIcon,
          headingTitle: "Services",
        },
        {
          headingIcon: serviceAccountIcon,
          headingTitle: "Service Account",
        },
        {
          headingIcon: settlementsIcon,
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
          headingIcon: settlementsIcon,
          headingTitle: "Preferences",
        },
        {
          headingIcon: settlementsIcon,
          headingTitle: " Fees and Pricing",
        },
        {
          headingIcon: auditLogsIcon,
          headingTitle: "Audit Logs",
        },
      ],
    },
  ],
];