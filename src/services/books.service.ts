/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

/** Services */
import ApiService from "./api.service";

/** Types */
import { BookData } from "../types/booksApi.types";

class BooksService extends ApiService {
    /** Get */
    getBooks = (searchTerm?: string, page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams("/books", {
                searchTerm: searchTerm?.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        );

    getBook = (id: number) => this.get(`/books/book/${id}`);

    getBooksHistory = (searchTerm?: string, page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams("/books/history", {
                searchTerm: searchTerm?.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        );

    /** Post */
    addBook = (data: BookData) => this.post("/books/create", data);

    /** Patch */
    editBook = (id: number, data: BookData) =>
        this.patch(`/books/update/${id}`, data);

    /** Delete */
    deleteBook = (id: number) => this.delete(`/books/delete/${id}`);
}

const BooksServiceInstance = new BooksService();

export default BooksServiceInstance;
