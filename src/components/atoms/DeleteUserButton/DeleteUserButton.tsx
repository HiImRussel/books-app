/** React */
import { useState } from "react";

/** Services */
import UserServiceInstance from "../../../services/user.service";

/** RXJS Store */
import { triggerUsersRefresh } from "../../../rxjsStore/usersRefresh.rxjs-store";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Icons */
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";

/** Components */
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { User } from "../../../types/user.types";
interface DeleteUserButtonProps {
    user: User;
}

const DeleteUserButton = (props: DeleteUserButtonProps) => {
    /** Props */
    const { user } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Handlers */
    const handleDeleteUser = () =>
        requestParser({
            promise: UserServiceInstance.deleteUser(user.id),
            setIsLoading,
            callBack: triggerUsersRefresh,
        });

    return (
        <div
            className={styles["delete-user-button"]}
            onClick={handleDeleteUser}
        >
            {isLoading ? (
                <LoadingSpinner
                    wrapperStyle={{
                        backgroundColor: "transparent",
                        width: "24px",
                        height: "24px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                    spinnerStyle={{
                        borderTop: "4px solid white",
                        width: "16px",
                        height: "16px",
                    }}
                />
            ) : (
                <TrashIcon />
            )}
        </div>
    );
};

export default DeleteUserButton;
