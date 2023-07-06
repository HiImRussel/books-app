/** React */
import { useCallback, useState } from "react";

/** Hooks */
import useBooks from "../../../hooks/useBooks";

/** Debounce */
import debounce from "lodash.debounce";

/** Components */
import Input from "../../atoms/Input/Input";
import BookTableRow from "../../molecules/BookTableRow/BookTableRow";
import Pagination from "../../molecules/Pagination/Pagination";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

/** Styles */
import styles from "./styles.module.scss";

const BooksTable = () => {
    /** Setup */
    const [inputValue, setInputValue] = useState("");

    /** Hooks */
    const { books, setSearchTerm, setPage, isLoading } = useBooks(8);

    /** Handlers */
    const debounceSearchTerm = useCallback(debounce(setSearchTerm, 500), []);

    const handleValueChange = (value: string) => {
        setInputValue(value);
        debounceSearchTerm(value);
    };

    return (
        <>
            <Input
                inputProps={{ value: inputValue, placeholder: "Search..." }}
                onChange={handleValueChange}
                label="Search"
                boxStyle={{ marginBottom: "16px", maxWidth: "300px" }}
            />

            <div className={styles["books-table"]}>
                {isLoading && <LoadingSpinner />}
                {books.data.map((book) => (
                    <BookTableRow key={book.id} book={book} />
                ))}
            </div>

            <Pagination
                paginationData={books.pagination}
                handlePageChange={setPage}
            />
        </>
    );
};

export default BooksTable;
