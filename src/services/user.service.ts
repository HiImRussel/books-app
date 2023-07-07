/** Services */
import ApiService from "./api.service";

/** URLS */
import API_ENDPOINTS from "../urls";

/** RXJS Store */
import { pushAlert } from "../rxjsStore/alerts.rxjs-store";

/** types */
import { UserAdditionalData } from "./../types/user.types";

class UserService extends ApiService {
    /** Get */
    getUser = (id: number) =>
        this.get(`${API_ENDPOINTS.user.getUser}/${id}`).catch((err) => {
            pushAlert("Error while fetching user", "error");

            throw err;
        });

    /** Delete */
    deleteUser = (id: number) =>
        this.delete(`${API_ENDPOINTS.user.deleteUser}/${id}`)
            .then((res) => {
                pushAlert("User deleted successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while deleting user", "error");

                throw err;
            });

    /** Patch */
    updateUser = (id: number, data: UserAdditionalData) =>
        this.patch(`${API_ENDPOINTS.user.updateUser}/${id}`, data)
            .then((res) => {
                pushAlert("User updated successfully", "success");

                return res;
            })
            .catch((err) => {
                pushAlert("Error while updating user", "error");

                throw err;
            });
}

const UserServiceInstance = new UserService();

export default UserServiceInstance;
