/** URLs */
import API_ENDPOINTS from "../urls";

/** Services */
import ApiService from "./api.service";

/** Types */
interface LoginData {
    email: string;
    password: string;
}

class AuthService extends ApiService {
    public login = (data: LoginData) =>
        this.post(API_ENDPOINTS.auth.login, data);
    public refreshToken = () => this.get(API_ENDPOINTS.auth.refreshToken);
}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance;
