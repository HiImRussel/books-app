/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { toggleFavourite } from "../../../store/slices/favourities.slice";

/** Incons */
import { ReactComponent as AddIcon } from "../../../assets/icons/comment-heart.svg";
import { ReactComponent as CancelIcon } from "../../../assets/icons/cross-small.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { RootState } from "../../../store/root.store";
import { useMemo } from "react";
interface AddToLibraryBtnProps {
    top: string;
    left: string;
    book: Book;
}

const AddToLibraryBtn = (props: AddToLibraryBtnProps) => {
    /** Props */
    const { top, left, book } = props;

    /** Store */
    const { books } = useSelector((state: RootState) => state.favourities);
    const dispatch = useDispatch();

    /** Data */
    const isFavourite = useMemo(
        () => books.some((favouriteBook) => favouriteBook.id === book.id),
        [books]
    );

    /** Handlers */
    const handleAddClick = () => dispatch(toggleFavourite(book));

    return (
        <div
            className={styles["add-to-library-btn"]}
            style={{ top, left }}
            onClick={handleAddClick}
        >
            {isFavourite ? <CancelIcon /> : <AddIcon />}
        </div>
    );
};

export default AddToLibraryBtn;
