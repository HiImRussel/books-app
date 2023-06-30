/** Constants */
import { trendingBooks } from "../../../constants/booksData";

/** Components */
import BooksList from "../BooksList/BooksList";

const TrendingBooks = () => {
    return <BooksList title="Trending" books={trendingBooks} />;
};

export default TrendingBooks;
