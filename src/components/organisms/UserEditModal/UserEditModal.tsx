/** Redyx */
import { useDispatch, useSelector } from "react-redux";

/** Actions */
import { closeUserEditModal } from "../../../store/slices/userEditModal.slice";

/** Components */
import Modal from "../Modal/Modal";
import EditUserForm from "../EditUserForm/EditUserForm";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { RootState } from "../../../store/root.store";

const UserEditModal = () => {
    /** Store */
    const { isOpen, user } = useSelector(
        (state: RootState) => state.userEditModal
    );
    const dispatch = useDispatch();

    /** Hanlders */
    const handleClose = () => dispatch(closeUserEditModal());

    if (!user) return null;

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["edit-user-modal"]}>
                <EditUserForm user={user} />
            </div>
        </Modal>
    );
};

export default UserEditModal;
