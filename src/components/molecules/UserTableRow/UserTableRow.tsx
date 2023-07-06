/** Components */
import EditUserButton from "../../atoms/EditUserButton/EditUserButton";
import DeleteUserButton from "../../atoms/DeleteUserButton/DeleteUserButton";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { User } from "../../../types/user.types";

interface UserTableRowProps {
    user: User;
}

const UserTableRow = (props: UserTableRowProps) => {
    /** Props */
    const { user } = props;

    return (
        <div className={styles["users-table-row"]}>
            <span>{user.email}</span>
            <div className={styles["users-table-row__actions"]}>
                <EditUserButton user={user} />
                <DeleteUserButton user={user} />
            </div>
        </div>
    );
};

export default UserTableRow;
