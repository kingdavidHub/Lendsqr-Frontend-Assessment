import { CalendarDays } from "lucide-react";
import styles from "./FilterForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";

interface FilterFormProps {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string | "active" | "inactive" | "blacklisted" | "pending";
}

const FilterForm = () => {
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
  const onSubmit: SubmitHandler<FilterFormProps> = (data) => console.log(data);

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
                {...register("date")}
              />
              <CalendarDays className={styles.calendarIcon} size={16} />
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
              <select id="status" {...register("status")}>
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
