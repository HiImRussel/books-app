/** Services */
import ApiService from "./api.service";

/** types */
import { UserAdditionalData } from "./../types/user.types";

class UserService extends ApiService {
    /** Get */
    getUser = (id: number) => this.get(`/user/${id}`);

    /** Delete */
    deleteUser = (id: number) => this.delete(`/user/delete/${id}`);

    /** Patch */
    updateUser = (id: number, data: UserAdditionalData) =>
        this.patch(`/user/update/${id}`, data);
}

const UserServiceInstance = new UserService();

export default UserServiceInstance;
