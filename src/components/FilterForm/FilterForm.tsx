import { FormEvent, useState } from "react";
import { CalendarDays } from "lucide-react";
import styles from "./FilterForm.module.scss";

const FilterForm = () => {
  const [formData, setFormData] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleReset = () => {
    setFormData({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle filter submission
    console.log("Filter data:", formData);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        <form className={styles.filterForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="organization">Organization</label>
            <div className={styles.selectWrapper}>
              <select
                id="organization"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="lendsqr">Lendsqr</option>
                <option value="irorun">Irorun</option>
                <option value="lendstar">Lendstar</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="User"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <div className={styles.dateWrapper}>
              <input
                type="date"
                id="date"
                placeholder="Date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <CalendarDays className={styles.calendarIcon} size={16}  />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <div className={styles.selectWrapper}>
              <select
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
              </select>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
            >
              Reset
            </button>
            <button type="submit" className={styles.filterButton}>
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
