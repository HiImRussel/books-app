/** Components */
import MobileNavLinksTrigger from "../../atoms/MobileNavLinksTrigger/MobileNavLinksTrigger";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import NavLinks from "../../molecules/NavLinks/NavLinks";

/** Styles */
import styles from "./styles.module.scss";

const Nav = () => {
    return (
        <div className={styles["nav"]}>
            <UserProfile />
            <NavLinks />
            <MobileNavLinksTrigger />
        </div>
    );
};

export default Nav;
