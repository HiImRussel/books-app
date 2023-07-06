/** React */
import { useEffect, useState } from "react";

/** Services */
import BooksServiceInstance from "../services/books.service";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";

/** Constants */
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";

/** Types */
import { BooksApiResponse } from "../types/booksApi.types";

const useBooks = () => {
    /** Setup */
    const [searchTerm, setSearchTerm] = useState("");

    /** Hooks */
    const { page, setPage } = usePagination();
    const {
        isLoading,
        data,
        error,
    }: { isLoading: boolean; data: BooksApiResponse; error: any } = useResource(
        BooksServiceInstance.getBooks,
        DEFAULT_DATA_FOR_USE_RESOURCE,
        [searchTerm, page, 20],
        [searchTerm, page]
    );

    /** Lifecycle */
    useEffect(() => {
        if (data.pagination.totalPages >= page) return;

        setPage(1);
    }, [data]);

    useEffect(() => {
        setPage(1);
    }, [searchTerm]);

    return { isLoading, books: data, setPage, setSearchTerm, error };
};

export default useBooks;
