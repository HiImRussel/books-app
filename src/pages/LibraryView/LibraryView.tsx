/** Hooks */
import useMyBooks from "../../hooks/useMyBooks";
import useMyBooksHistory from "../../hooks/useMyBooksHistory";

/** Components */
import BooksList from "../../components/organisms/BooksList/BooksList";

const LibraryView = () => {
    /** Hooks */
    const { isLoading, books, setPage } = useMyBooks();
    const {
        isLoading: isLoadingHistory,
        books: booksHistory,
        setPage: setHistoryPage,
    } = useMyBooksHistory();

    return (
        <>
            <BooksList
                title="My library"
                books={books.data}
                isLoading={isLoading}
                paginationData={books.pagination}
                setPage={setPage}
                includePagination
            />

            <BooksList
                title="My history"
                books={booksHistory.data}
                isLoading={isLoadingHistory}
                paginationData={books.pagination}
                setPage={setHistoryPage}
                includePagination
            />
        </>
    );
};

export default LibraryView;
