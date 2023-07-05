/** Services */
import UserLibraryInstance from "../services/userLibrary.service";

/** RXJS store */
import { booksRefreshTrigger$ } from "../rxjsStore/booksRefresh.rxjs-store";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";
import useObservable from "./useObservable";

/** Types */
import { BooksApiResponse } from "../types/booksApi.types";
import { useEffect } from "react";

const useMyBooks = () => {
    /** Hooks */
    const { page, setPage } = usePagination();
    const refreshToken = useObservable(booksRefreshTrigger$);

    const {
        isLoading,
        data,
        error,
    }: { isLoading: boolean; data: BooksApiResponse; error: any } = useResource(
        UserLibraryInstance.getUserLibrary,
        { data: [], pagination: { page: 1, pageSize: 1, totalPages: 1 } },
        [page, 20],
        [page, refreshToken],
        1
    );

    useEffect(() => {
        if (data.pagination.totalPages >= page) return;

        setPage(1);
    }, [data]);

    return { isLoading, books: data, setPage, error };
};

export default useMyBooks;
