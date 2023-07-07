/** React */
import { useEffect, useState } from "react";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";
import useObservable from "./useObservable";

/** Services */
import BooksServiceInstance from "../services/books.service";

/** Constants */
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";

/** RXJS Store */
import { booksRefreshTrigger$ } from "../rxjsStore/booksRefresh.rxjs-store";

/** Types */
import { HistoryResponse } from "../types/history.types";

const useBooksHistory = () => {
    /** Setup */
    const [searchTerm, setSearchTerm] = useState("");

    /** Hooks */
    const refreshTrigger = useObservable(booksRefreshTrigger$);
    const { page, setPage } = usePagination();
    const { isLoading, data } = useResource<HistoryResponse>(
        BooksServiceInstance.getBooksHistory,
        DEFAULT_DATA_FOR_USE_RESOURCE,
        [searchTerm, page, 5],
        [searchTerm, page, refreshTrigger],
        1
    );

    /** Lifecycle */
    useEffect(() => {
        if (data?.pagination?.totalPages >= page) return;

        setPage(1);
    }, [data]);

    useEffect(() => {
        setPage(1);
    }, [searchTerm]);

    return {
        isLoading,
        data,
        setSearchTerm,
        setPage,
    };
};

export default useBooksHistory;
