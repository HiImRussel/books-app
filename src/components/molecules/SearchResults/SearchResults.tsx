/** Components */
import SearchResult from "../SearchResult/SearchResult";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
interface SearchResultsProps {
    books: BooksApiBook[];
    isLoading?: boolean;
}

const SearchResults = (props: SearchResultsProps) => {
    /** Props */
    const { books, isLoading } = props;

    if (isLoading)
        return <div className={styles["search-results"]}>Loading...</div>;

    return (
        <div className={styles["search-results"]}>
            {books.length > 0 ? (
                books.map((book) => <SearchResult key={book.id} book={book} />)
            ) : (
                <span className={styles["search-results__no-results"]}>
                    No results
                </span>
            )}
        </div>
    );
};

export default SearchResults;
