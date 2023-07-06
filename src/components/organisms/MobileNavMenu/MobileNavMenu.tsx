/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** RXJS Store */
import isMobileMenuOpen$ from "../../../rxjsStore/mobileMenu.rxjs-store";

/** Components */
import Modal from "../Modal/Modal";
import NavLinks from "../../molecules/NavLinks/NavLinks";

/** Styles */
import styles from "./styles.module.scss";

const MobileNavMenu = () => {
    /** Hooks */
    const isOpen = useObservable(isMobileMenuOpen$);

    /** Handlers */
    const handleClose = () => isMobileMenuOpen$.next(false);

    return (
        <Modal isOpen={isOpen} setIsOpen={handleClose}>
            <div className={styles["mobile-nav-menu"]}>
                <NavLinks isMobile />
            </div>
        </Modal>
    );
};

export default MobileNavMenu;
