/** Services */
import ApiService from "./api.service";

/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

class UsersService extends ApiService {
    /** Get */
    getUsers = (searchTerm: string, page: number, pageSize: number) =>
        this.get(
            bindQueryParams("/users", {
                searchTerm: searchTerm.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        );
}

const UsersServiceInstance = new UsersService();

export default UsersServiceInstance;
