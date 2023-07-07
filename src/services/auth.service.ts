/** URLs */
import API_ENDPOINTS from "../urls";

/** Services */
import ApiService from "./api.service";

/** Types */
interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    city: string;
    postalCode: string;
    isAdmin?: boolean;
}

class AuthService extends ApiService {
    /** Get */
    public refreshToken = () => this.get(API_ENDPOINTS.auth.refreshToken);

    /** Post */
    public login = (data: LoginData) =>
        this.post(API_ENDPOINTS.auth.login, data);

    public register = (data: RegisterData) =>
        this.post(API_ENDPOINTS.auth.register, data);

    public registerByAdmin = (data: RegisterData) =>
        this.post(API_ENDPOINTS.auth.regusterByAdmin, data);

    /** Patch */
    public changePassword = (newPassword: string) =>
        this.patch(API_ENDPOINTS.auth.changePassword, { newPassword });
}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance;
