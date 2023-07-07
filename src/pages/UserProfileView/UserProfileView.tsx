/** Components */
import PageTitle from "../../components/atoms/PageTitle/PageTitle";
import ChangePasswordForm from "../../components/molecules/ChangePasswordForm/ChangePasswordForm";
import EditUserForm from "../../components/organisms/EditUserForm/EditUserForm";

/** Hooks */
import useObservable from "../../hooks/useObservable";

/** RXJS Store */
import { currentUser$ } from "../../rxjsStore/auth.rxjs-store";

/** Styles */
import styles from "./styles.module.scss";

const UserProfileView = () => {
    /** Hooks */
    const user = useObservable(currentUser$);

    return (
        <div>
            <PageTitle text="User Profile" />

            {user && user.id !== null && (
                <div className={styles["user-profile-view__edit-form"]}>
                    <EditUserForm user={user} isFromAdminPage={false} />
                </div>
            )}

            <div
                className={`${styles["user-profile-view__edit-form"]} ${styles["user-profile-view__edit-form--password"]}`}
            >
                <ChangePasswordForm />
            </div>
        </div>
    );
};

export default UserProfileView;
