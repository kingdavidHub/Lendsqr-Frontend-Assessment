import { CalendarDays } from "lucide-react";
import styles from "./FilterForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import { UserRecord } from "../../types";
import React, { SetStateAction } from "react";
import { chunkCurrentData, formatDate } from "../../utils";
interface FilterFormProps {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string | "active" | "inactive" | "blacklisted" | "pending";
}

const FilterForm = ({
  data,
  setData,
  setRanges,
  setCurrentRange,
}: {
  data: UserRecord[] | null;
  setData: React.Dispatch<SetStateAction<UserRecord[] | null>>;
  setRanges: React.Dispatch<SetStateAction<UserRecord[][]>>;
  setCurrentRange: React.Dispatch<SetStateAction<UserRecord[] | null>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormProps>({
    defaultValues: {
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    },
  });
  const onSubmit: SubmitHandler<FilterFormProps> = (formData) => {
    const filteredData = data?.filter((item: UserRecord) => {
      return (
        item.username === formData.username ||
        item.email === formData.email ||
        item.date_joined === formatDate(formData.date) ||
        item.phone_number === formData.phoneNumber ||
        item.status === formData.status
      );
    });

    if (typeof filteredData !== "undefined") {
      console.log("filtered data", filteredData)
      setData(filteredData);
      const chunk: UserRecord[][] = chunkCurrentData(filteredData);
      setRanges(chunk);
      setCurrentRange(chunk[0]);
    }
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterContainer}>
        <form className={styles.filterForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="organization">Organization</label>
            <div className={styles.selectWrapper}>
              <select
                id="organization"
                {...register("organization", {
                  required: {
                    value: true,
                    message: "Organization has not been set",
                  },
                })}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="lendsqr">Lendsqr</option>
                <option value="irorun">Irorun</option>
                <option value="lendstar">Lendstar</option>
              </select>
            </div>
            {errors.organization && (
              <span className={classNames(styles.formError)}>
                {errors.organization.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="User"
              {...register("username")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <div className={styles.dateWrapper}>
              <input
                type="date"
                id="date"
                placeholder="Date"
                {...register("date", {required: {
                  message: 'Date has not been set',
                  value: true
                }})}
              />
              <CalendarDays className={styles.calendarIcon} size={16} />
              {errors.date && (
              <span className={classNames(styles.formError)}>
                {errors.date.message}
              </span>
            )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <div className={styles.selectWrapper}>
              <select id="status" {...register("status", {required: {
                message: "Status has not been set",
                value: true
              }})}>
                <option value="" disabled>
                  Select
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
              </select>
            </div>
            {errors.status && (
              <span className={classNames(styles.formError)}>
                {errors.status.message}
              </span>
            )}
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => reset()}
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
