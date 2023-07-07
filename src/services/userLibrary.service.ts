/** Service */
import ApiService from "./api.service";

/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

/** URLS */
import API_ENDPOINTS from "../urls";

/** RXJS Store */
import { pushAlert } from "../rxjsStore/alerts.rxjs-store";

class UserLibrary extends ApiService {
    /** Get */
    getUserLibrary = (page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams(API_ENDPOINTS.userLibrary.getUserLibrary, {
                page,
                pageSize,
            })
        ).catch((err) => {
            pushAlert("Error while fetching user library", "error");

            throw err;
        });

    getUserLibraryHistory = (page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams(API_ENDPOINTS.userLibrary.getUserLibraryHistory, {
                page,
                pageSize,
            })
        ).catch((err) => {
            pushAlert("Error while fetching user library history", "error");

            throw err;
        });

    /** Post */
    updateBookInLibrary = (bookId: number) =>
        this.post(API_ENDPOINTS.userLibrary.updateBookInLibrary, { bookId })
            .then((res) => {
                pushAlert(
                    "Book status in library updated successfully",
                    "success"
                );

                return res;
            })
            .catch((err) => {
                pushAlert(
                    "Error while updating book status in library",
                    "error"
                );

                throw err;
            });
}

const UserLibraryInstance = new UserLibrary();

export default UserLibraryInstance;
