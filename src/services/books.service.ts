/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

/** Services */
import ApiService from "./api.service";

/** Constants */
import API_ENDPOINTS from "../urls";

/** RXJS Store */
import { pushAlert } from "../rxjsStore/alerts.rxjs-store";

/** Types */
import { BookData } from "../types/booksApi.types";

class BooksService extends ApiService {
    /** Get */
    getBooks = (searchTerm?: string, page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams(API_ENDPOINTS.books.getBooks, {
                searchTerm: searchTerm?.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        ).catch((err) => {
            pushAlert("Error while fetching books", "error");

            throw err;
        });

    getBook = (id: number) =>
        this.get(`${API_ENDPOINTS.books.getBook}/${id}`).catch((err) => {
            pushAlert("Error while fetching book", "error");

            throw err;
        });

    getBooksHistory = (searchTerm?: string, page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams(API_ENDPOINTS.books.getBooksHistory, {
                searchTerm: searchTerm?.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        ).catch((err) => {
            pushAlert("Error while fetching books history", "error");

            throw err;
        });

    /** Post */
    addBook = (data: BookData) =>
        this.post(API_ENDPOINTS.books.addBook, data)
            .then((res) => {
                pushAlert("Book added successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while adding book", "error");

                throw err;
            });

    /** Patch */
    editBook = (id: number, data: BookData) =>
        this.patch(`${API_ENDPOINTS.books.editBook}/${id}`, data)
            .then((res) => {
                pushAlert("Book edited successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while editing book", "error");

                throw err;
            });

    /** Delete */
    deleteBook = (id: number) =>
        this.delete(`${API_ENDPOINTS.books.deleteBook}/${id}`)
            .then((res) => {
                pushAlert("Book deleted successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while deleting book", "error");

                throw err;
            });
}

const BooksServiceInstance = new BooksService();

export default BooksServiceInstance;
