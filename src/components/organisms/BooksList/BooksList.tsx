/** React */
import { useMemo } from "react";

/** Components */
import BookBox from "../../molecules/BookBox/BookBox";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface BooksListProps {
    books: Book[];
    title: string;
}

const BooksList = (props: BooksListProps) => {
    /** Props */
    const { books, title } = props;

    /** Data */
    const booksList = useMemo(
        () => books.map((book) => <BookBox key={book.id} book={book} />),
        [books]
    );

    return (
        <div className={styles["books-list"]}>
            <h2 className={styles["books-list__title"]}>{title}</h2>
            <div className={styles["books-list__books"]}>{booksList}</div>
        </div>
    );
};

export default BooksList;
