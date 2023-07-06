/** React */
import { ReactNode } from "react";

/** Classnames */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface PaginationBtnProps {
    onClick: (page: number) => void;
    pageNumber: number;
    currentPage: number;
    isActive?: boolean;
    placeHolderMode?: boolean;
    content?: ReactNode;
    isDecrement?: boolean;
    isIncrement?: boolean;
    isArrow?: boolean;
}

const PaginationBtn = (props: PaginationBtnProps) => {
    /** Props */
    const {
        onClick,
        isActive = true,
        pageNumber,
        placeHolderMode,
        currentPage,
        content,
        isDecrement,
        isIncrement,
        isArrow,
    } = props;

    /** Handlers */
    const handleClick = () => {
        if (!isActive || placeHolderMode) return;
        if (isDecrement) return onClick(currentPage - 1);
        if (isIncrement) return onClick(currentPage + 1);

        onClick(pageNumber);
    };

    return (
        <button
            className={classNames(styles["pagination-btn"], {
                [styles["pagination-btn--active"]]: pageNumber === currentPage,
                [styles["pagination-btn--arrow"]]: isArrow,
            })}
            onClick={handleClick}
        >
            {placeHolderMode ? "..." : content}
        </button>
    );
};

export default PaginationBtn;
