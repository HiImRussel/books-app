/** React Router */
import { Link } from "react-router-dom";

/** Constants */
import { APP_URLS } from "../../../constants/app";

/** Styles */
import styles from "./styles.module.scss";

/** Assets */
import userProfile from "../../../assets/imgs/user_profile.png";

const UserProfile = () => {
    return (
        <Link to={APP_URLS.USER_PROFILE}>
            <img src={userProfile} className={styles["user-profile"]} />
        </Link>
    );
};

export default UserProfile;
