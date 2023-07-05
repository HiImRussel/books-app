/** React */
import { useMemo } from "react";

/** Helpers */
import returnPaginationElements from "../../../helpers/returnPaginationElements";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { PaginationApi } from "../../../types/paginationApi.types";

interface PaginationProps {
    paginationData: PaginationApi;
    handlePageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
    /** Props */
    const { paginationData, handlePageChange } = props;

    /** Data */
    const paginationBtns = useMemo(
        () => returnPaginationElements(paginationData, handlePageChange),
        [paginationData]
    );

    if (paginationData.totalPages === 0) return null;

    return <div className={styles["pagination"]}>{paginationBtns}</div>;
};

export default Pagination;
