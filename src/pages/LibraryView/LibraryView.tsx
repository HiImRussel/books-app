/** Hooks */
import useMyBooks from "../../hooks/useMyBooks";

/** Components */
import BooksList from "../../components/organisms/BooksList/BooksList";

const LibraryView = () => {
    /** Hooks */
    const { isLoading, books, setPage } = useMyBooks();

    return (
        <BooksList
            title="My library"
            books={books.data}
            isLoading={isLoading}
            paginationData={books.pagination}
            setPage={setPage}
            includePagination
        />
    );
};

export default LibraryView;
