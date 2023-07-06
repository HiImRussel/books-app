/** Icons */
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu-dots-vertical.svg";

/** RXJS Store */
import isMobileMenuOpen$ from "../../../rxjsStore/mobileMenu.rxjs-store";

/** Styles */
import styles from "./styles.module.scss";

const MobileNavLinksTrigger = () => {
    /** Handlers */
    const handleClick = () => isMobileMenuOpen$.next(true);

    return (
        <div className={styles["mobile-nav-tigger"]} onClick={handleClick}>
            <MenuIcon />
        </div>
    );
};

export default MobileNavLinksTrigger;
