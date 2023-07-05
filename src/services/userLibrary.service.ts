/** Service */
import ApiService from "./api.service";

/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

class UserLibrary extends ApiService {
    /** Get */
    getUserLibrary = (page?: number, pageSize?: number) =>
        this.get(
            bindQueryParams("/userLibrary", {
                page,
                pageSize,
            })
        );

    /** Post */
    updateBookInLibrary = (bookId: number) =>
        this.post(`/userLibrary/update`, { bookId });
}

const UserLibraryInstance = new UserLibrary();

export default UserLibraryInstance;
