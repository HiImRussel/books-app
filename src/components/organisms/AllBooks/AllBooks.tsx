/** Constants */
import { allBooks } from "../../../constants/booksData";

/** Components */
import BooksList from "../BooksList/BooksList";

const AllBooks = () => {
    return <BooksList title="All books" books={allBooks} />;
};

export default AllBooks;
