/** Components */
import BooksList from "../BooksList/BooksList";

/** Constants */
import { popularBooks } from "../../../constants/booksData";

const PopularBooks = () => {
    return <BooksList books={popularBooks} title="Popular" />;
};

export default PopularBooks;
