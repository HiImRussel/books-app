/** React */
import { useEffect, useState } from "react";

/** Services */
import BooksServiceInstance from "../services/books.service";

/** Hooks */
import usePagination from "./usePagination";
import useObservable from "./useObservable";
import useResource from "./useResource";

/** RXJS Store */
import { booksRefreshTrigger$ } from "../rxjsStore/booksRefresh.rxjs-store";

/** Constants */
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";

/** Types */
import { BooksApiResponse } from "../types/booksApi.types";

const useBooks = (perPage = 20) => {
    /** Setup */
    const [searchTerm, setSearchTerm] = useState("");

    /** Hooks */
    const { page, setPage } = usePagination();
    const refreshBooksTrigger = useObservable(booksRefreshTrigger$);
    const { isLoading, data, error } = useResource<BooksApiResponse>(
        BooksServiceInstance.getBooks,
        DEFAULT_DATA_FOR_USE_RESOURCE,
        [searchTerm, page, perPage],
        [searchTerm, page, refreshBooksTrigger],
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

    return { isLoading, books: data, setPage, setSearchTerm, error };
};

export default useBooks;
