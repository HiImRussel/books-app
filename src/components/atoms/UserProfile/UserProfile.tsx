/** Styles */
import styles from "./styles.module.scss";

/** Assets */
import userProfile from "../../../assets/imgs/user_profile.png";

const UserProfile = () => {
    return <img src={userProfile} className={styles["user-profile"]} />;
};

export default UserProfile;
