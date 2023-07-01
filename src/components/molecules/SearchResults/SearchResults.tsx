/** React */
import { useMemo } from "react";

/** Constants */
import { allBooks } from "../../../constants/booksData";

/** Components */
import SearchResult from "../SearchResult/SearchResult";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface SearchResultsProps {
    inputValue: string;
}

const SearchResults = (props: SearchResultsProps) => {
    /** Props */
    const { inputValue } = props;

    /** Data */
    const foundBooks = useMemo(
        () =>
            allBooks.filter((book) =>
                book.title
                    .toLocaleLowerCase()
                    .includes(inputValue.toLocaleLowerCase())
            ),
        [inputValue]
    );

    return (
        <div className={styles["search-results"]}>
            {foundBooks.length > 0 ? (
                foundBooks.map((book) => (
                    <SearchResult key={book.id} book={book} />
                ))
            ) : (
                <span className={styles["search-results__no-results"]}>
                    No results
                </span>
            )}
        </div>
    );
};

export default SearchResults;
