import { SidebarProps } from "../types";
import userFriendsIcon from "../assets/sidebarIcon/user-friends.svg";
import DecisionModels from "../assets/sidebarIcon/DecisionModels.svg";
import whitelistIcon from "../assets/sidebarIcon/whitelist.svg";
import karmaIcon from "../assets/sidebarIcon/karma.svg";
import organizationIcon from "../assets/sidebarIcon/briefcase1.svg";
import gurantorsIcon from "../assets/sidebarIcon/gurantors_1.svg";
import loanProductsIcon from "../assets/sidebarIcon/loansack.svg";
import piggyBankIcon from "../assets/sidebarIcon/piggy-bank.svg";
import loanRequestsIcon from "../assets/sidebarIcon/loan-request.svg";
import npBankIcon from "../assets/sidebarIcon/np_bank.svg";
import trancationIcon from "../assets/sidebarIcon/transactions.svg";
import feesChargesIcon from "../assets/sidebarIcon/feesCharges.svg";
import servicesIcon from "../assets/sidebarIcon/services.svg";
import serviceAccountIcon from "../assets/sidebarIcon/serviceAccount.svg";
import settlementsIcon from "../assets/sidebarIcon/settlements.svg";
import reportIcon from "../assets/sidebarIcon/reports.svg";
import badgePercentIcon from "../assets/sidebarIcon/badge-percent.svg";
import auditLogsIcon from "../assets/sidebarIcon/auditLogs.svg";
import preferencesIcon from "../assets/sidebarIcon/preferences.svg";



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
          headingIcon: gurantorsIcon,
          headingTitle: "Guarantors",
        },
        {
          headingIcon: loanProductsIcon,
          headingTitle: "Loans",
        },
        {
          headingIcon: DecisionModels,
          headingTitle: "Decision Models",
        },
        {
          headingIcon: piggyBankIcon,
          headingTitle: "Savings",
        },
        {
          headingIcon: loanRequestsIcon,
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
          headingIcon: loanRequestsIcon,
          headingTitle: "Loan Products",
        },
        {
          headingIcon: npBankIcon,
          headingTitle: "Savings Products",
        },
        {
          headingIcon: feesChargesIcon,
          headingTitle: "Fees and Charges",
        },
        {
          headingIcon: trancationIcon,
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
        {
          headingIcon: reportIcon,
          headingTitle: "Reports",
        },
      ],
    },
  ],
  [
    {
      heading: "Settings",
      headingList: [
        {
          headingIcon: preferencesIcon,
          headingTitle: "Preferences",
        },
        {
          headingIcon: badgePercentIcon,
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