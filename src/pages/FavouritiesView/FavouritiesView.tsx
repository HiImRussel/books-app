/** Components */
import { useSelector } from "react-redux";
import BooksList from "../../components/organisms/BooksList/BooksList";

/** Types */
import type { RootState } from "../../store/root.store";

const FavouritiesView = () => {
    /** Store */
    const { books } = useSelector((state: RootState) => state.favourities);

    return <BooksList title="My favourities" books={books} />;
};

export default FavouritiesView;
