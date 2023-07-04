/** React */
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

/** React router */
import { useNavigate } from "react-router-dom";

/** Helpers */
import getGeneralError from "../helpers/getGeneralError";
import requestParser from "../helpers/requestParser";

/** Constants */
import { GENERAL_FIELD_NAME } from "../constants/api";

/** Services */
import AuthServiceInstance from "../services/auth.service";

/** Types */
import { LoginResponse } from "../types/login.types";
import { ApiError } from "../types/error.types";
import { JWT_TOKEN_LOCAL_STORAGE_KEY_NAME } from "../constants/auth";
import { setAuthSession } from "../rxjsStore/auth.rxjs-store";

const useLoginForm = () => {
    /** State */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    /** Router */
    const navigate = useNavigate();

    /** Data */
    const generalError = useMemo(() => getGeneralError(errors), [errors]);

    /** Handlers */
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredErrors = errors.filter(
            (e) => e.field !== "email" && e.field !== GENERAL_FIELD_NAME
        );

        setEmail(e.target.value);
        setErrors(filteredErrors);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredErrors = errors.filter(
            (e) => e.field !== "password" && e.field !== GENERAL_FIELD_NAME
        );

        setPassword(e.target.value);
        setErrors(filteredErrors);
    };

    const handleLoginSuccess = (data: LoginResponse) => {
        setAuthSession(data.user, data.token, data.expireTime);
        navigate("/");
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        requestParser(
            AuthServiceInstance.login({ email, password }),
            setIsLoading,
            undefined,
            setErrors,
            handleLoginSuccess
        );
    };

    return {
        errors,
        password,
        email,
        isLoading,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
        generalError,
    };
};

export default useLoginForm;
