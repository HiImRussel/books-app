/** Constants */
import { DEFAULT_PAGINATION } from "../../../constants/api";

/** Hooks */
import useBooks from "../../../hooks/useBooks";

/** Components */
import BooksList from "../BooksList/BooksList";

const AllBooks = () => {
    /** Hooks */
    const { isLoading, books, setPage } = useBooks();

    return (
        <BooksList
            title="All books"
            books={books?.data}
            isLoading={isLoading}
            paginationData={books?.pagination || DEFAULT_PAGINATION}
            setPage={setPage}
            includePagination
        />
    );
};

export default AllBooks;
