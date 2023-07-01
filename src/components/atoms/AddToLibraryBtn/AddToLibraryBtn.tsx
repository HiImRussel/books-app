/** Redux */
import { useDispatch, useSelector } from "react-redux";

/** Store */
import { toggleFavourite } from "../../../store/slices/favourities.slice";

/** Incons */
import { ReactComponent as AddIcon } from "../../../assets/icons/comment-heart.svg";
import { ReactComponent as CancelIcon } from "../../../assets/icons/cross-small.svg";

/** Styles */
import styles from "./styles.module.scss";

/** React */
import { useMemo } from "react";

/** Types */
import { CSSProperties } from "react";
import type { RootState } from "../../../store/root.store";
interface AddToLibraryBtnProps {
    book: Book;
    style?: CSSProperties;
}

const AddToLibraryBtn = (props: AddToLibraryBtnProps) => {
    /** Props */
    const { style, book } = props;

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
            style={style}
            onClick={handleAddClick}
        >
            {isFavourite ? <CancelIcon /> : <AddIcon />}
        </div>
    );
};

export default AddToLibraryBtn;
