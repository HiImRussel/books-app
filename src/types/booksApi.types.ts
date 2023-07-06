/** Types */
import { PaginationApi } from "./paginationApi.types";

export interface BookData {
    author: string | null;
    coverImgURL: string | null;
    description: string | null;
    quantity: number;
    title: string;
}
export interface BooksApiBook extends BookData {
    isInUserLibrary?: boolean;
    id: number;
}

export interface BooksApiResponse {
    data: BooksApiBook[];
    pagination: PaginationApi;
}
