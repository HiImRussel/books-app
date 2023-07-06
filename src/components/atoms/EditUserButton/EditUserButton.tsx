/** Icons */
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { User } from "../../../types/user.types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import requestParser from "../../../helpers/requestParser";
import UserServiceInstance from "../../../services/user.service";
import { useDispatch } from "react-redux";
import { openUserEditModal } from "../../../store/slices/userEditModal.slice";
interface EditUserButtonProps {
    user: User;
}

const EditUserButton = (props: EditUserButtonProps) => {
    /** Props */
    const { user } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Store */
    const dispatch = useDispatch();

    /** Hanlders */
    const handleEditClick = () =>
        requestParser({
            promise: UserServiceInstance.getUser(user.id),
            setIsLoading,
            onSuccess: (data) => dispatch(openUserEditModal(data.user)),
        });

    return (
        <div className={styles["edit-user-button"]} onClick={handleEditClick}>
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
                <EditIcon />
            )}
        </div>
    );
};

export default EditUserButton;
