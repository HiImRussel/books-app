/** React */
import { FormEvent, useState } from "react";

/** Hooks */
import useObservable from "../../../hooks/useObservable";
import useUserForm from "../../../hooks/useUserForm";

/** RXJS Store */
import isAddUserModalOpen$ from "../../../rxjsStore/addUserModal.rxjs-store";
import { triggerUsersRefresh } from "../../../rxjsStore/usersRefresh.rxjs-store";

/** Helpers */
import requestParser from "../../../helpers/requestParser";

/** Services */
import AuthServiceInstance from "../../../services/auth.service";

/** Components */
import Modal from "../Modal/Modal";
import UserFormFields from "../../molecules/UserFormFields/UserFormFields";
import Button from "../../atoms/Button/Button";

/** Styles */
import styles from "./styles.module.scss";

const AddUserModal = () => {
    /** Setup */
    const [isLoading, setIsLoading] = useState(false);

    /** Hooks */
    const isOpen = useObservable(isAddUserModalOpen$);
    const registerFormData = useUserForm({});

    /** Handlers */
    const handleClose = () => isAddUserModalOpen$.next(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        const data = {
            email: registerFormData.email,
            password: registerFormData.password,
            phoneNumber: registerFormData.phoneNumber,
            address: registerFormData.address,
            city: registerFormData.city,
            postalCode: registerFormData.postalCode,
            isAdmin: registerFormData.isAdminChecked,
        };

        requestParser({
            promise: AuthServiceInstance.registerByAdmin(data),
            onSuccess: () => {
                handleClose();
                triggerUsersRefresh();
            },
            onError: registerFormData.setErrors,
            setIsLoading,
        });
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["add-user-modal"]}>
                <form onSubmit={handleSubmit}>
                    <UserFormFields {...registerFormData} isFromAdminPage />
                    <Button fullWidth>Add user</Button>
                </form>
            </div>
        </Modal>
    );
};

export default AddUserModal;
