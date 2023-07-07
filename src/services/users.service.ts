/** Services */
import ApiService from "./api.service";

/** Helpers */
import bindQueryParams from "../helpers/bindQueryParams";

/** URLS */
import API_ENDPOINTS from "../urls";

/** RXJS Store */
import { pushAlert } from "../rxjsStore/alerts.rxjs-store";

class UsersService extends ApiService {
    /** Get */
    getUsers = (searchTerm: string, page: number, pageSize: number) =>
        this.get(
            bindQueryParams(API_ENDPOINTS.users.getUsers, {
                searchTerm: searchTerm.length === 0 ? undefined : searchTerm,
                page,
                pageSize,
            })
        ).catch((err) => {
            pushAlert("Error while fetching users", "error");

            throw err;
        });
}

const UsersServiceInstance = new UsersService();

export default UsersServiceInstance;
