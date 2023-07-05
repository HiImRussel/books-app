/** Styles */
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
            </div>
        </div>
    );
};

export default SearchResult;
