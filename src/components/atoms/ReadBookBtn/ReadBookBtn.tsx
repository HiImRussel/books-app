/** Redux */
import { useDispatch } from "react-redux";

/** Store */
import { toggleModal } from "../../../store/slices/pdfModal.slice";

/** Incons */
import { ReactComponent as ReadBookIcon } from "../../../assets/icons/book-alt.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface ReadBookBtnProps {
    top: string;
    left: string;
    pdfURL: string;
}

const ReadBookBtn = (props: ReadBookBtnProps) => {
    /** Props */
    const { top, left, pdfURL } = props;

    /** Store */
    const dispatch = useDispatch();

    /** Handlers */
    const handleReadClick = () =>
        dispatch(toggleModal({ isOpen: true, pdfURL: pdfURL }));

    return (
        <div
            className={styles["read-book-btn"]}
            style={{ top, left }}
            onClick={handleReadClick}
        >
            <ReadBookIcon />
        </div>
    );
};

export default ReadBookBtn;
