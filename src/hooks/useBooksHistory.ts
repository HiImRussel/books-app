import { useState } from "react";
import usePagination from "./usePagination";
import useResource from "./useResource";
import BooksServiceInstance from "../services/books.service";
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";
import useObservable from "./useObservable";
import { booksRefreshTrigger$ } from "../rxjsStore/booksRefresh.rxjs-store";
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

    return {
        isLoading,
        data,
        setSearchTerm,
        setPage,
    };
};

export default useBooksHistory;
