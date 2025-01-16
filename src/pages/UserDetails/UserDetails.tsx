import { useState } from "react";
import { ArrowLeft, UserRound } from "lucide-react";
import { IoStar } from "react-icons/io5";
import styles from "./UserDetails.module.scss";
import classNames from "classnames";
import { IoIosStarOutline } from "react-icons/io";
import { Link, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import useUserDetailsStorage from "../../hooks/useUserDetailsStorage";
import { UserRecord } from "../../types";

const UserDetails = () => {
  const userId: string | undefined = useParams()?.id;
  const userDetails: UserRecord | undefined = useUserDetailsStorage(userId);
  // const fullName = `${userDetails?.firstName} ${userDetails?.lastName}`;
  // const matchedID: string | undefined = userDetails ? userDetails.userId : undefined;
  // console.log(matchedID);
  const gender: "male" | "female" = "male";
  console.log(userDetails);
  
  

  const [activeTab, setActiveTab] = useState("General Details");

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <>
      <Helmet>
        {/* possible use template literal and attach the user name to the title from localstorage */}
        <title>User Details - LendSqr Admin</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link
            to="/dashboard"
            className={styles.backLink}
            aria-label="Back to Users"
          >
            <ArrowLeft size={20} />
            Back to Users
          </Link>

          <div className={styles.headerActions}>
            <h1>User Details</h1>
            <div className={styles.buttons}>
              <button
                className={styles.blacklistBtn}
                aria-label="Blacklist User"
              >
                BLACKLIST USER
              </button>
              <button className={styles.activateBtn} aria-label="Activate User">
                ACTIVATE USER
              </button>
            </div>
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.mainInfo}>
            <div className={styles.userInfo}>
              <div className={classNames(styles.avatar, "flexCenter")}>
                <UserRound
                  className=""
                  color="#213F7D"
                  size={"3rem"}
                  aria-label="Profile icon"
                />
              </div>
              <div className={styles.nameSection}>
                <h2>Grace Effiom</h2>
                <p>LSQFf587g90</p>
              </div>
            </div>

            <div className={styles.userTier}>
              <p>User's Tier</p>
              <div className={styles.stars}>
                <IoStar
                  className={styles.starFilled}
                  size={16}
                  aria-label="Star filled"
                />
                <IoIosStarOutline
                  className={styles.starFilled}
                  size={16}
                  aria-label="Star outline"
                />
                <IoIosStarOutline
                  className={styles.starFilled}
                  size={16}
                  aria-label="Star outline"
                />
              </div>
            </div>

            <div className={styles.accountInfo}>
              <h3>₦200,000.00</h3>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${
                  activeTab === tab ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab)}
                aria-label={`Tab ${tab}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.detailsSection}>
          <section className={styles.personalInfo}>
            <h3>Personal Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>FULL NAME</label>
                <p>Grace Effiom</p>
              </div>
              <div className={styles.infoItem}>
                <label>PHONE NUMBER</label>
                <p>{userDetails?.phone_number}</p>
              </div>
              <div className={styles.infoItem}>
                <label>EMAIL ADDRESS</label>
                <p>{userDetails?.email}</p>
              </div>
              <div className={styles.infoItem}>
                <label>BVN</label>
                <p>07060780922</p>
              </div>
              <div className={styles.infoItem}>
                <label>GENDER</label>
                <p>Female</p>
              </div>
              <div className={styles.infoItem}>
                <label>MARITAL STATUS</label>
                <p>Single</p>
              </div>
              <div className={styles.infoItem}>
                <label>CHILDREN</label>
                <p>None</p>
              </div>
              <div className={styles.infoItem}>
                <label>TYPE OF RESIDENCE</label>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </section>

          <section className={styles.education}>
            <h3>Education and Employment</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>LEVEL OF EDUCATION</label>
                <p>B.Sc</p>
              </div>
              <div className={styles.infoItem}>
                <label>EMPLOYMENT STATUS</label>
                <p>Employed</p>
              </div>
              <div className={styles.infoItem}>
                <label>SECTOR OF EMPLOYMENT</label>
                <p>FinTech</p>
              </div>
              <div className={styles.infoItem}>
                <label>DURATION OF EMPLOYMENT</label>
                <p>2 years</p>
              </div>
              <div className={styles.infoItem}>
                <label>OFFICE EMAIL</label>
                <p>grace@lendsqr.com</p>
              </div>
              <div className={styles.infoItem}>
                <label>MONTHLY INCOME</label>
                <p>₦200,000.00 - ₦400,000.00</p>
              </div>
              <div className={styles.infoItem}>
                <label>LOAN REPAYMENT</label>
                <p>40,000</p>
              </div>
            </div>
          </section>

          <section className={styles.socials}>
            <h3>Socials</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>TWITTER</label>
                <p>@grace_effiom</p>
              </div>
              <div className={styles.infoItem}>
                <label>FACEBOOK</label>
                <p>Grace Effiom</p>
              </div>
              <div className={styles.infoItem}>
                <label>INSTAGRAM</label>
                <p>@grace_effiom</p>
              </div>
            </div>
          </section>

          <section className={styles.guarantor}>
            <h3>Guarantor</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>FULL NAME</label>
                <p>Debby Ogana</p>
              </div>
              <div className={styles.infoItem}>
                <label>PHONE NUMBER</label>
                <p>07060780922</p>
              </div>
              <div className={styles.infoItem}>
                <label>EMAIL ADDRESS</label>
                <p>debby@gmail.com</p>
              </div>
              <div className={styles.infoItem}>
                <label>RELATIONSHIP</label>
                <p>Sister</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
