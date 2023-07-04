/** Axios */
import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwtToken");

        if (!token) return config;

        config.headers["Authorization"] = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
