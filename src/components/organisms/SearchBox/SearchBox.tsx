/** React */
import { useState } from "react";

/** React popper */
import { usePopper } from "react-popper";

/** Components */
import SearchInput from "../../molecules/SearchInput/SearchInput";
import SearchResults from "../../molecules/SearchResults/SearchResults";

/** Types */
import type { FormEvent } from "react";

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

    /** Handlers */
    const handleValueChange = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        setInputValue(value);
        setIsDropdownOpen(value.length > 0);
    };

    return (
        <>
            <div ref={setReferenceElement}>
                <SearchInput value={inputValue} onChange={handleValueChange} />
            </div>

            {isDropdownOpen && (
                <div
                    ref={setPopperElement}
                    style={{ ...styles.popper, width: "100%" }}
                    {...attributes.popper}
                >
                    <SearchResults inputValue={inputValue} />
                </div>
            )}
        </>
    );
};

export default SearchBox;
