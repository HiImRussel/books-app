/** Redux */
import { useDispatch } from "react-redux";

/** Store */
import { toggleSeachModal } from "../../../store/slices/searchModal.slice";

/** Icons */
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

/** Styles */
import styles from "./styles.module.scss";

const SearchToggle = () => {
    /** Store */
    const dispatch = useDispatch();

    /** Handlers */
    const handleOpenSearch = () => dispatch(toggleSeachModal(true));

    return (
        <div className={styles["search-toggle"]} onClick={handleOpenSearch}>
            <SearchIcon />
        </div>
    );
};

export default SearchToggle;
