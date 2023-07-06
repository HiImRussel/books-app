/** React */
import { useState } from "react";

/** Redux */
import { useDispatch } from "react-redux";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Store */
import { openBookModal } from "../../../store/slices/bookModal.slice";
import { toggleSeachModal } from "../../../store/slices/searchModal.slice";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** Components */
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface SearchResultProps {
    book: BooksApiBook;
}

const SearchResult = (props: SearchResultProps) => {
    /** Props */
    const { book } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Dispatch */
    const dispatch = useDispatch();

    /** Handlers */
    const handleBookClick = () => {
        if (isLoading) return;

        requestParser({
            promise: BooksServiceInstance.getBook(book.id),
            onSuccess: (data) => {
                dispatch(toggleSeachModal(false));
                dispatch(openBookModal(data.data));
            },
            setIsLoading,
        });
    };

    return (
        <div className={styles["search-result"]} onClick={handleBookClick}>
            {isLoading && <LoadingSpinner />}

            <img
                src={book.coverImgURL || ""}
                className={styles["search-result__img"]}
            />
            <div className={styles["search-result__col-wrapper"]}>
                <div className={styles["search-result__info"]}>
                    <h5 className={styles["search-result__title"]}>
                        {book.title}
                    </h5>
                    <p className={styles["search-result__description"]}>
                        {book.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
