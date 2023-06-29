/** Icons */
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

/** Styles */
import styles from "./styles.module.scss";

const SearchToggle = () => {
    return (
        <div className={styles["search-toggle"]}>
            <SearchIcon />
        </div>
    );
};

export default SearchToggle;
