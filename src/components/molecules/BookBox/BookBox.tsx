/** Components */
import AddToLibraryBtn from "../../atoms/AddToLibraryBtn/AddToLibraryBtn";
import ReadBookBtn from "../../atoms/ReadBookBtn/ReadBookBtn";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface BookBoxProps {
    book: Book;
}

const BookBox = (props: BookBoxProps) => {
    /** Props */
    const { book } = props;
    const { title, description, img } = book;

    return (
        <div className={styles["book-box"]}>
            <img src={img} className={styles["book-box__image"]} />

            <div className={styles["book-box__btns-wrapper"]}>
                <AddToLibraryBtn book={book} />
                <ReadBookBtn pdfURL={book.pdf} style={{ marginLeft: "8px" }} />
            </div>

            <div className={styles["book-box__content"]}>
                <h6 className={styles["book-box__title"]}>{title}</h6>
                <p className={styles["book-box__description"]}>{description}</p>
            </div>
        </div>
    );
};

export default BookBox;
