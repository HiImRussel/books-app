/** Redux */
import { useDispatch } from "react-redux";

/** Store */
import { toggleModal } from "../../../store/slices/pdfModal.slice";
import { toggleSeachModal } from "../../../store/slices/searchModal.slice";

/** Incons */
import { ReactComponent as ReadBookIcon } from "../../../assets/icons/book-alt.svg";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { CSSProperties } from "react";
interface ReadBookBtnProps {
    style?: CSSProperties;
    pdfURL: string;
}

const ReadBookBtn = (props: ReadBookBtnProps) => {
    /** Props */
    const { style, pdfURL } = props;

    /** Store */
    const dispatch = useDispatch();

    /** Handlers */
    const handleReadClick = () => {
        dispatch(toggleSeachModal(false));
        dispatch(toggleModal({ isOpen: true, pdfURL: pdfURL }));
    };

    return (
        <div
            className={styles["read-book-btn"]}
            style={style}
            onClick={handleReadClick}
        >
            <ReadBookIcon />
        </div>
    );
};

export default ReadBookBtn;
