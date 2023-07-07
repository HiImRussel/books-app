/** React */
import { useState } from "react";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Services */
import AuthServiceInstance from "../../../services/auth.service";

/** Components */
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

/** Types */
import { ApiError } from "../../../types/error.types";

/** Styles */
import styles from "./styles.module.scss";

const ChangePasswordForm = () => {
    /** Setup */
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<ApiError[]>([]);
    const [password, setPassword] = useState("");

    /** Handlers */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        requestParser({
            promise: AuthServiceInstance.changePassword(password),
            setIsLoading,
            onError: setErrors,
            onSuccess: () => {
                setPassword("");
                setErrors([]);
            },
        });
    };

    return (
        <form
            className={styles["change-password-form"]}
            onSubmit={handleSubmit}
        >
            <Input
                inputProps={{
                    value: password,
                    placeholder: "Change Password",
                    type: "password",
                }}
                errors={errors}
                setErrors={setErrors}
                onChange={setPassword}
                fieldName="password"
                boxStyle={{ marginRight: "8px", width: "100%" }}
            />
            <Button buttonProps={{ style: { height: "44px" } }}>Change</Button>
        </form>
    );
};

export default ChangePasswordForm;
