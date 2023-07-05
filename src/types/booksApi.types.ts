/** Types */
import { PaginationApi } from "./paginationApi.types";

export interface BooksApiBook {
    author: string | null;
    coverImgURL: string | null;
    description: string | null;
    id: number;
    quantity: number;
    title: string;
    isInUserLibrary?: boolean;
}

export interface BooksApiResponse {
    data: BooksApiBook[];
    pagination: PaginationApi;
}
