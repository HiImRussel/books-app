/** React */
import { FormEvent, useState } from "react";

/** React router */
import { NavLink, useNavigate } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Services */
import AuthServiceInstance from "../../../services/auth.service";

/** Components */
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { ApiError } from "../../../types/error.types";
import Checkbox from "../../atoms/Checkbox/Checkbox";

interface RegisterFormProps {
    isFromAdminPage?: boolean;
}

const RegisterForm = (props: RegisterFormProps) => {
    /** Props */
    const { isFromAdminPage } = props;

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

    return (
        <form onSubmit={handleSubmit}>
            <Input
                inputProps={{
                    value: email,
                    placeholder: "Email",
                    type: "email",
                }}
                onChange={setEmail}
                setErrors={setErrors}
                label="Email"
                fieldName="email"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: password,
                    placeholder: "Password",
                    type: "password",
                }}
                onChange={setPassword}
                setErrors={setErrors}
                label="Password"
                fieldName="password"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{
                    value: phoneNumber,
                    placeholder: "Phone number",
                    type: "number",
                }}
                onChange={setPhoneNumber}
                setErrors={setErrors}
                label="Phone number"
                fieldName="phoneNumber"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: address, placeholder: "Address" }}
                onChange={setAddress}
                setErrors={setErrors}
                label="Address"
                fieldName="address"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: city, placeholder: "City" }}
                onChange={setCity}
                setErrors={setErrors}
                label="City"
                fieldName="city"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: country, placeholder: "Country" }}
                onChange={setCountry}
                setErrors={setErrors}
                label="Country"
                fieldName="country"
                errors={errors}
                boxStyle={{ marginBottom: "16px" }}
            />
            <Input
                inputProps={{ value: postalCode, placeholder: "Postal code" }}
                onChange={setPostalCode}
                setErrors={setErrors}
                label="Postal code"
                fieldName="postalCode"
                errors={errors}
                boxStyle={{ marginBottom: "32px" }}
            />

            {isFromAdminPage && (
                <Checkbox
                    isChecked={isAdminChecked}
                    onChange={setIsAdminChecked}
                    label="Is user an administrator"
                    wrapperStyle={{ marginBottom: "32px" }}
                />
            )}

            <Button fullWidth>
                {" "}
                {isFromAdminPage ? "Add user" : "Register"}
            </Button>

            {!isFromAdminPage && (
                <>
                    <span className={styles["register-form__or-wrapper"]}>
                        <span className={styles["register-form__or-text"]}>
                            or
                        </span>
                    </span>

                    <p className={styles["register-form__login-text"]}>
                        Go back to <NavLink to={APP_URLS.LOGIN}>login</NavLink>
                    </p>
                </>
            )}
        </form>
    );
};

export default RegisterForm;
