/** Components */
import AdminAddUserButton from "../../components/atoms/AdminAddUserButton/AdminAddUserButton";
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import AddUserModal from "../../components/organisms/AddUserModal/AddUserModal";
import UserEditModal from "../../components/organisms/UserEditModal/UserEditModal";
import UsersTable from "../../components/organisms/UsersTable/UsersTable";

const UsersManagementView = () => {
    return (
        <div>
            <PageTitle text="Users management" />
            <UsersTable />
            <AdminAddUserButton />

            <AddUserModal />
            <UserEditModal />
        </div>
    );
};

export default UsersManagementView;
