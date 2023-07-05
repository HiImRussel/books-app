/** Icons */
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

/** Components */
import Input from "../../atoms/Input/Input";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { type HTMLProps } from "react";

interface SearchInputProps {
    inputProps?: HTMLProps<HTMLInputElement>;
    onChange: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
    /** Props */
    const { inputProps, onChange } = props;

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
                    ...inputProps,
                }}
                onChange={onChange}
                content={searchIcon}
            />
        </div>
    );
};

export default SearchInput;
