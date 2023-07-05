/** React */
import { FormEvent, useState } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Helpers */
import requestParser from "../helpers/requestParser";

/** Services */
import AuthServiceInstance from "../services/auth.service";

/** Constants */
import { APP_URLS } from "../constants/app";

/** Types */
import { ApiError } from "../types/error.types";

const useRegisterForm = (isFromAdminPage?: boolean) => {
    /** Setup */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [isAdminChecked, setIsAdminChecked] = useState(false);
    const [errors, setErrors] = useState<ApiError[]>([]);

    /** Router */
    const navigate = useNavigate();

    /** Handlers */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            password,
            phoneNumber,
            address,
            city,
            postalCode,
            country,
            isAdmin: isFromAdminPage ? isAdminChecked : undefined,
        };

        requestParser({
            promise: isFromAdminPage
                ? AuthServiceInstance.registerByAdmin(data)
                : AuthServiceInstance.register(data),
            onSuccess: () => navigate(APP_URLS.LOGIN),
            onError: setErrors,
        });
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        city,
        setCity,
        postalCode,
        setPostalCode,
        country,
        setCountry,
        isAdminChecked,
        setIsAdminChecked,
        errors,
        setErrors,
        handleSubmit,
    };
};

export default useRegisterForm;
