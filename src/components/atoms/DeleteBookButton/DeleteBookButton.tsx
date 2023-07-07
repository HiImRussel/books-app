/** React */
import { useState } from "react";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** RXJS Store */
import { triggerBooksRefresh } from "../../../rxjsStore/booksRefresh.rxjs-store";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Icons */
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";

/** Components */
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface DeleteBookButtonProps {
    book: BooksApiBook;
}

const DeleteBookButton = (props: DeleteBookButtonProps) => {
    /** Props */
    const { book } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Handlers */
    const handleDeleteBook = () =>
        requestParser({
            promise: BooksServiceInstance.deleteBook(book.id),
            setIsLoading,
            callBack: triggerBooksRefresh,
        });

    return (
        <div
            className={styles["delete-book-button"]}
            onClick={handleDeleteBook}
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

export default DeleteBookButton;
