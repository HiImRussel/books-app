/** React */
import { FormEvent, useState } from "react";

/** Hooks */
import useUserForm from "../../../hooks/useUserForm";

/** Services */
import UserServiceInstance from "../../../services/user.service";

/** RXJS Store */
import { triggerUsersRefresh } from "../../../rxjsStore/usersRefresh.rxjs-store";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Components */
import UserFormFields from "../../molecules/UserFormFields/UserFormFields";
import Button from "../../atoms/Button/Button";

/** Types */
import { User } from "../../../types/user.types";
interface EditUserFormProps {
    user: User;
    isFromAdminPage?: boolean;
}

const EditUserForm = (props: EditUserFormProps) => {
    /** Props */
    const { user, isFromAdminPage = true } = props;

    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Hooks */
    const userFormData = useUserForm({ ...user, isAdminChecked: user.isAdmin });

    /** Handlers */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        requestParser({
            promise: UserServiceInstance.updateUser(user.id, {
                phoneNumber: userFormData.phoneNumber,
                address: userFormData.address,
                city: userFormData.city,
                postalCode: userFormData.postalCode,
                isAdmin: userFormData.isAdminChecked,
            }),
            setIsLoading,
            onSuccess: () => triggerUsersRefresh(),
            onError: userFormData.setErrors,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <UserFormFields
                {...userFormData}
                isFromAdminPage={isFromAdminPage}
                hidePassword
                hideEmail
            />
            <Button fullWidth>{isLoading ? "Loading..." : "Save"}</Button>
        </form>
    );
};

export default EditUserForm;
