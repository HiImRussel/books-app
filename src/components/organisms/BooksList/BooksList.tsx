/** React */
import { useMemo } from "react";

/** Components */
import BookBox from "../../molecules/BookBox/BookBox";
import Pagination from "../../molecules/Pagination/Pagination";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { BooksApiBook } from "../../../types/booksApi.types";
import { PaginationApi } from "../../../types/paginationApi.types";
interface BooksListProps {
    books: BooksApiBook[];
    title: string;
    isLoading?: boolean;
    includePagination?: boolean;
    paginationData?: PaginationApi;
    setPage?: (page: number) => void;
    disableClick?: boolean;
}

const BooksList = (props: BooksListProps) => {
    /** Props */
    const {
        books,
        title,
        isLoading,
        includePagination,
        paginationData,
        setPage,
        disableClick,
    } = props;

    /** Data */
    const booksList = useMemo(
        () =>
            isLoading || !books
                ? []
                : books.map((book) => (
                      <BookBox
                          key={book.id}
                          book={book}
                          disableClick={disableClick}
                      />
                  )),
        [books]
    );

    return (
        <div className={styles["books-list"]}>
            <h2 className={styles["books-list__title"]}>{title}</h2>

            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <div className={styles["books-list__books"]}>
                    {booksList.length > 0 ? (
                        booksList
                    ) : (
                        <span className={styles["books-list__no-content"]}>
                            No content
                        </span>
                    )}
                </div>
            )}

            {includePagination && paginationData && setPage && !isLoading && (
                <Pagination
                    paginationData={paginationData}
                    handlePageChange={setPage}
                />
            )}
        </div>
    );
};

export default BooksList;
