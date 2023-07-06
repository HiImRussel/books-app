/** React */
import { useCallback, useState } from "react";

/** React popper */
import { usePopper } from "react-popper";

/** Debounce */
import debounce from "lodash.debounce";

/** Services */
import BooksServiceInstance from "../../../services/books.service";

/** Hooks */
import useResource from "../../../hooks/useResource";

/** Components */
import SearchInput from "../../molecules/SearchInput/SearchInput";
import SearchResults from "../../molecules/SearchResults/SearchResults";

/** Types */
import { BooksApiResponse } from "../../../types/booksApi.types";

const SearchBox = () => {
    /** Setup */
    const [referenceElement, setReferenceElement] = useState<Element | null>();
    const [popperElement, setPopperElement] = useState<HTMLElement | null>();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    /** Hooks */
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });
    const { isLoading, data: books } = useResource<BooksApiResponse>(
        BooksServiceInstance.getBooks,
        { data: [] },
        [searchTerm],
        [searchTerm],
        1
    );

    /** Handlers */
    const debouneSearchTerm = useCallback(debounce(setSearchTerm, 500), []);

    const handleValueChange = (value: string) => {
        setInputValue(value);
        debouneSearchTerm(value);
        setIsDropdownOpen(value.length > 0);
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
