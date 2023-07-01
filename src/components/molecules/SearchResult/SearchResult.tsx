/** Styles */
import AddToLibraryBtn from "../../atoms/AddToLibraryBtn/AddToLibraryBtn";
import ReadBookBtn from "../../atoms/ReadBookBtn/ReadBookBtn";
import styles from "./styles.module.scss";

/** Types */
interface SearchResultProps {
    book: Book;
}

const SearchResult = (props: SearchResultProps) => {
    /** Props */
    const { book } = props;

    return (
        <div className={styles["search-result"]}>
            <img src={book.img} className={styles["search-result__img"]} />
            <div className={styles["search-result__col-wrapper"]}>
                <div className={styles["search-result__info"]}>
                    <h5 className={styles["search-result__title"]}>
                        {book.title}
                    </h5>
                    <p className={styles["search-result__description"]}>
                        {book.description}
                    </p>
                </div>
                <div className={styles["search-result__buttons"]}>
                    <AddToLibraryBtn
                        style={{ position: "static", boxShadow: "none" }}
                        book={book}
                    />
                    <ReadBookBtn
                        style={{
                            position: "static",
                            boxShadow: "none",
                            marginLeft: "16px",
                        }}
                        pdfURL={book.pdf}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
