/** React */
import { useState } from "react";

/** Services */
import BookServiceInstance from "../services/books.service";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";

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
        BookServiceInstance.getBooks,
        { data: [], pagination: { page: 1, pageSize: 1, totalPages: 1 } },
        [searchTerm, page, 20],
        [searchTerm, page]
    );

    return { isLoading, books: data, setPage, setSearchTerm, error };
};

export default useBooks;
