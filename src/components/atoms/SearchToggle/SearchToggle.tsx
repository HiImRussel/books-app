/** Redux */
import { useDispatch } from "react-redux";

/** Store */
import { toggleSeachModal } from "../../../store/slices/searchModal.slice";

/** Icons */
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

/** Styles */
import styles from "./styles.module.scss";
import isMobileMenuOpen$ from "../../../rxjsStore/mobileMenu.rxjs-store";

const SearchToggle = () => {
    /** Store */
    const dispatch = useDispatch();

    /** Handlers */
    const handleOpenSearch = () => {
        dispatch(toggleSeachModal(true));
        isMobileMenuOpen$.next(false);
    };

    return (
        <div className={styles["search-toggle"]} onClick={handleOpenSearch}>
            <SearchIcon />
        </div>
    );
};

export default SearchToggle;
