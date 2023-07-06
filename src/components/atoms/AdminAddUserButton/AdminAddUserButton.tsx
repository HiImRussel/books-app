/** RXJS Store */
import isAddUserModalOpen$ from "../../../rxjsStore/addUserModal.rxjs-store";

/** Components */
import Button from "../Button/Button";

const AdminAddUserButton = () => {
    /** Handlers */
    const handleOpen = () => isAddUserModalOpen$.next(true);

    return (
        <Button
            buttonProps={{ style: { marginTop: "16px" }, onClick: handleOpen }}
        >
            Add user
        </Button>
    );
};

export default AdminAddUserButton;
