/** Redux */
import { useState } from "react";

/** Redux */
import { useDispatch } from "react-redux";

/** Actions */
import { openBookModal } from "../../../store/slices/bookModal.slice";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Components */
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface BookBoxProps {
    book: BooksApiBook;
    disableClick?: boolean;
}

const BookBox = (props: BookBoxProps) => {
    /** Props */
    const { book, disableClick } = props;
    const { title, description, coverImgURL } = book;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Dispatch */
    const dispatch = useDispatch();

    /** Handlers */
    const handleBookClick = () => {
        if (disableClick) return;

        requestParser({
            promise: BooksServiceInstance.getBook(book.id),
            onSuccess: (data) => dispatch(openBookModal(data.data)),
            setIsLoading,
        });
    };

    return (
        <div className={styles["book-box"]} onClick={handleBookClick}>
            <img
                src={coverImgURL || ""}
                className={styles["book-box__image"]}
            />

            <div className={styles["book-box__content"]}>
                <h6 className={styles["book-box__title"]}>{title}</h6>
                <p className={styles["book-box__description"]}>{description}</p>
            </div>

            {isLoading && <LoadingSpinner />}
        </div>
    );
};

export default BookBox;
