/** React */
import { useCallback, useState } from "react";

/** React popper */
import { usePopper } from "react-popper";

/** Debounce */
import debounce from "lodash.debounce";

/** Components */
import SearchInput from "../../molecules/SearchInput/SearchInput";
import SearchResults from "../../molecules/SearchResults/SearchResults";

/** Types */
import useBooks from "../../../hooks/useBooks";

const SearchBox = () => {
    /** Setup */
    const [referenceElement, setReferenceElement] = useState<Element | null>();
    const [popperElement, setPopperElement] = useState<HTMLElement | null>();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

    /** Hooks */
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });
    const { isLoading, books, setSearchTerm } = useBooks();

    /** Handlers */
    const debouneSearchTerm = useCallback(debounce(setSearchTerm, 500), []);

    const handleValueChange = (value: string) => {
        setInputValue(value);
        setIsDropdownOpen(value.length > 0);
        debouneSearchTerm(value);
    };

    return (
        <>
            <div ref={setReferenceElement}>
                <SearchInput
                    inputProps={{ value: inputValue }}
                    onChange={handleValueChange}
                />
            </div>

            {isDropdownOpen && (
                <div
                    ref={setPopperElement}
                    style={{ ...styles.popper, width: "100%" }}
                    {...attributes.popper}
                >
                    <SearchResults
                        books={books?.data || []}
                        isLoading={isLoading}
                    />
                </div>
            )}
        </>
    );
};

export default SearchBox;
