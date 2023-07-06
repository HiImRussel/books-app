/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { RootState } from "../../../store/root.store";
import { closeEditBookModal } from "../../../store/slices/editBookModal.slice";

/** Components */
import Modal from "../Modal/Modal";
import EditBookForm from "../../molecules/EditBookForm/EditBookForm";

/** Styles */
import styles from "./styles.module.scss";

const EditBookModal = () => {
    /** Store */
    const { isOpen, book } = useSelector(
        (state: RootState) => state.editBookModal
    );
    const dispatch = useDispatch();
    /** Handlers */
    const handleClose = () => dispatch(closeEditBookModal());

    if (!book) return null;

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["edit-book-modal"]}>
                <EditBookForm book={book} />
            </div>
        </Modal>
    );
};

export default EditBookModal;
