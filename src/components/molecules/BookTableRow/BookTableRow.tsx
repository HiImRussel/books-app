/** Components */
import DeleteBookButton from "../../atoms/DeleteBookButton/DeleteBookButton";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface BookTableRowProps {
    book: BooksApiBook;
}

const BookTableRow = (props: BookTableRowProps) => {
    /** Props */
    const { book } = props;

    return (
        <div className={styles["book-table-row"]}>
            <span>{book.title}</span>

            <div className={styles["book-table-row__actions"]}>
                <span>
                    <DeleteBookButton book={book} />
                </span>
            </div>
        </div>
    );
};

export default BookTableRow;
