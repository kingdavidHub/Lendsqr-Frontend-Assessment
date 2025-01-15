import styles from "./PaginatedData.module.scss";
import classNames from "classnames";
import { UserRecord } from "../../types";
import { MoreVertical } from "lucide-react";
import ClickAwayListener from "react-click-away-listener";
import TableActions from "../TableActions/TableActions";

const PaginatedData = ({
  user,
  activeUserId,
  setActiveUserId,
}: {
  user: UserRecord;
  activeUserId: string | null;
  setActiveUserId: (id: string | null) => void;
}) => {
  const isActionsActive = activeUserId === user.userId;
  const handleClickAway = () => {
    setActiveUserId(null);
  };

  return (
    <>
      <tr>
        <td>{user.organization}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.dateJoined}</td>
        <td>
          <span
            className={classNames(
              user.status.toLowerCase() === "active" && styles.active,
              user.status.toLowerCase() === "inactive" && styles.inactive,
              user.status.toLowerCase() === "blacklisted" && styles.blacklisted,
              user.status.toLowerCase() === "pending" && styles.pending,
              styles.status,
              `${user.status.toLowerCase()}`
            )}
          >
            {user.status}
          </span>
        </td>
        <td
          style={{
            textAlign: "right",
          }}
          className={classNames(styles.actions)}
        >
          <button
            className={styles.moreBtn}
            aria-label="More actions"
            onClick={() =>
              setActiveUserId(isActionsActive ? null : user.userId)
            }
          >
            <MoreVertical size={16} />
          </button>

          {isActionsActive && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <div>
                <TableActions userId={activeUserId} />
              </div>
            </ClickAwayListener>
          )}
        </td>
      </tr>
    </>
  );
};


export default PaginatedData;