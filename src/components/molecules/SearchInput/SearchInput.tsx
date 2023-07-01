/** Icons */
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

/** Components */
import Input from "../../atoms/Input/Input";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { type HTMLProps } from "react";

const SearchInput = (props: HTMLProps<HTMLInputElement>) => {
    /** Rendering */
    const searchIcon = (
        <div className={styles["search-input__icon"]}>
            <SearchIcon />
        </div>
    );
    return (
        <div>
            <Input
                inputProps={{
                    placeholder: "Search...",
                    autoFocus: true,
                    ...props,
                }}
                content={searchIcon}
            />
        </div>
    );
};

export default SearchInput;
