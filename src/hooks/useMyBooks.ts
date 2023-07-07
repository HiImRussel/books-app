/** Services */
import UserLibraryInstance from "../services/userLibrary.service";

/** RXJS store */
import { booksRefreshTrigger$ } from "../rxjsStore/booksRefresh.rxjs-store";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";
import useObservable from "./useObservable";

/** Constants */
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";

/** Types */
import { BooksApiResponse } from "../types/booksApi.types";
import { useEffect } from "react";

const useMyBooks = () => {
    /** Hooks */
    const { page, setPage } = usePagination();
    const refreshToken = useObservable(booksRefreshTrigger$);
    const { isLoading, data, error } = useResource<BooksApiResponse>(
        UserLibraryInstance.getUserLibrary,
        DEFAULT_DATA_FOR_USE_RESOURCE,
        [page, 20],
        [page, refreshToken],
        1
    );

    /** Lifecycle */
    useEffect(() => {
        if (data?.pagination?.totalPages >= page) return;

        setPage(1);
    }, [data]);

    return { isLoading, books: data, setPage, error };
};

export default useMyBooks;
