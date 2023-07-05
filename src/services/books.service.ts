/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

/** Services */
import ApiService from "./api.service";

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
}

const BookServiceInstance = new BooksService();

export default BookServiceInstance;
