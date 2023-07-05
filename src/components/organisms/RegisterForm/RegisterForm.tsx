/** React router */
import { NavLink } from "react-router-dom";

/** Hooks */
import useRegisterForm from "../../../hooks/useRegisterForm";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Components */
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface RegisterFormProps {
    isFromAdminPage?: boolean;
}

const RegisterForm = (props: RegisterFormProps) => {
    /** Props */
    const { isFromAdminPage } = props;

    /** Hooks */
    const {
        handleSubmit,
        email,
        setEmail,
        errors,
        setErrors,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        postalCode,
        setPostalCode,
        isAdminChecked,
        setIsAdminChecked,
        country,
        setCountry,
        city,
        setCity,
    } = useRegisterForm(isFromAdminPage);

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
