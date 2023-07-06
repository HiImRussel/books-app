/** Components */
import DeleteBookButton from "../../atoms/DeleteBookButton/DeleteBookButton";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
import EditBookButton from "../../atoms/EditBookButton/EditBookButton";
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
                <EditBookButton id={book.id} />
                <DeleteBookButton book={book} />
            </div>
        </div>
    );
};

export default BookTableRow;
