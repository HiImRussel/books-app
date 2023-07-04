/** React router */
import { NavLink } from "react-router-dom";

/** Hooks */
import useLoginForm from "../../../hooks/useLoginForm";

/** Components */
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

/** Styles */
import styles from "./styles.module.scss";

const LoginForm = () => {
    /** Hooks */
    const {
        handleSubmit,
        handleChangeEmail,
        email,
        errors,
        handleChangePassword,
        password,
        generalError,
        isLoading,
    } = useLoginForm();

    return (
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <Input
                inputProps={{
                    type: "text",
                    placeholder: "E-mail",
                    onChange: handleChangeEmail,
                    value: email,
                }}
                boxStyle={{ marginBottom: "16px" }}
                label="E-mail"
                errors={errors}
                fieldName="email"
            />
            <Input
                inputProps={{
                    type: "text",
                    placeholder: "Password",
                    onChange: handleChangePassword,
                    value: password,
                }}
                boxStyle={{ marginBottom: "16px" }}
                label="Password"
                errors={errors}
                fieldName="password"
            />

            {generalError && (
                <span className={styles["login-form__login-error"]}>
                    {generalError.message}
                </span>
            )}

            <Button fullWidth isLoading={isLoading}>
                Login
            </Button>

            <span className={styles["login-form__or-wrapper"]}>
                <span className={styles["login-form__or-text"]}>or</span>
            </span>

            <p className={styles["login-form__register-text"]}>
                <NavLink to="/register">Register</NavLink> your account for free
            </p>
        </form>
    );
};

export default LoginForm;
