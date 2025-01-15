import { Link } from "react-router";
import styles from "./TableActions.module.scss";
import { Eye, UserRoundCheck, UserX } from "lucide-react";
import classNames from "classnames";

const TableActions = ({ userId }: { userId: number }) => {
  return (
    <div className={styles.actionsWrapper}>
      <div className={styles.actionsContainer}>
        <div className={classNames(styles.tableActions, "flexCol gap-0")}>
          <Link to={`/user/details`}>
            <div className={styles.actionItem}>
              <Eye size={16} className={styles.icon} />
              <span>View Details</span>
            </div>
          </Link>
          <Link to={`/user/details`}>
            <div className={styles.actionItem}>
              <UserX size={16} className={styles.icon} />
              <span>Blacklist User</span>
            </div>
          </Link>
          <Link to={`/user/details`}>
            <div className={styles.actionItem}>
              <UserRoundCheck size={16} className={styles.icon} />
              <span>Activate User</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
