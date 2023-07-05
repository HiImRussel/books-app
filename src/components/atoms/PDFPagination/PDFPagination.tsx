/** Styles */
import styles from "./styles.module.scss";

/** Types */
import type { CSSProperties } from "react";
interface PaginationProps {
    pageNumber: number;
    totalPages: number;
    handlePageChange: (pageNumber: number) => void;
    wrapperStyles?: CSSProperties;
}

const PDFPagination = (props: PaginationProps) => {
    /** Props */
    const { pageNumber, totalPages, handlePageChange, wrapperStyles } = props;

    /** Handlers */
    const handlePageChangeClick = (action: "increment" | "decrement") => {
        if (action === "increment" && pageNumber < totalPages) {
            handlePageChange(pageNumber + 1);

            return;
        }

        if (action === "decrement" && pageNumber > 1) {
            handlePageChange(pageNumber - 1);
        }
    };

    return (
        <div className={styles["pagination"]} style={wrapperStyles}>
            <button
                onClick={() => handlePageChangeClick("decrement")}
                className={`${styles["pagination__button"]} ${styles["pagination__button--decrement"]}`}
                disabled={pageNumber === 1}
            >
                -
            </button>
            <div className={styles["pagination__content"]}>
                {pageNumber} of {totalPages}
            </div>
            <button
                onClick={() => handlePageChangeClick("increment")}
                className={`${styles["pagination__button"]} ${styles["pagination__button--increment"]}`}
                disabled={pageNumber === totalPages}
            >
                +
            </button>
        </div>
    );
};

export default PDFPagination;
