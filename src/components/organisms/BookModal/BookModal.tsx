/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { RootState } from "../../../store/root.store";

/** Actions */
import { closeBookModal } from "../../../store/slices/bookModal.slice";

/** Components */
import Modal from "../Modal/Modal";

/** Styles */
import styles from "./styles.module.scss";
import ToggleBookInLibraryBtn from "../../atoms/ToggleBookInLibraryBtn/ToggleBookInLibraryBtn";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";

const BookModal = () => {
    /** Store */
    const { isOpen, book } = useSelector((state: RootState) => state.bookModal);
    const dispatch = useDispatch();

    /** Handlers */
    const handleClose = () => dispatch(closeBookModal());

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["book-modal"]}>
                <img
                    src={book?.coverImgURL || ""}
                    className={styles["book-modal__img"]}
                />

                {((book && book?.quantity > 0) ||
                    (book && book.isInUserLibrary)) && (
                    <ToggleBookInLibraryBtn
                        book={book as BooksApiBook}
                        reloadBookModalData
                    />
                )}

                <h3 className={styles["book-modal__title"]}>{book?.title}</h3>
                <h4 className={styles["book-modal__author"]}>{book?.author}</h4>
                <p className={styles["book-modal__description"]}>
                    {book?.description}
                </p>
            </div>
        </Modal>
    );
};

export default BookModal;
