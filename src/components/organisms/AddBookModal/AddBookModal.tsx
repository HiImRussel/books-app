/** React */
import { FormEvent, useState } from "react";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** Hooks */
import useBookFields from "../../../hooks/useBookFields";
import useObservable from "../../../hooks/useObservable";

/** RXJS Store */
import isAddBookModalOpen$ from "../../../rxjsStore/adBookModal.rxjs-store";
import { triggerBooksRefresh } from "../../../rxjsStore/booksRefresh.rxjs-store";

/** Components */
import BookFormFields from "../../molecules/BookFormFields/BookFormFields";
import Modal from "../Modal/Modal";
import Button from "../../atoms/Button/Button";

/** Styles */
import styles from "./styles.module.scss";

const AddBookModal = () => {
    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Hooks */
    const isOpen = useObservable(isAddBookModalOpen$);
    const formData = useBookFields({});

    /** Handlers */
    const handleClose = () => isAddBookModalOpen$.next(false);

    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        requestParser({
            promise: BooksServiceInstance.addBook({
                title: formData.title,
                coverImgURL: formData.coverImgURL,
                author: formData.author,
                quantity: +formData.quantity,
                description: formData.description,
            }),
            setIsLoading,
            onError: formData.setErrors,
            onSuccess: () => {
                isAddBookModalOpen$.next(false);
                triggerBooksRefresh();
            },
        });
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["add-book-modal"]}>
                <form onSubmit={handleSave}>
                    <BookFormFields {...formData} />
                    <Button fullWidth>
                        {isLoading ? "Loading..." : "Save"}
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default AddBookModal;
