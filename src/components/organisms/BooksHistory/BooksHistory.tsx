import { useCallback, useState } from "react";
import useBooksHistory from "../../../hooks/useBooksHistory";
import Pagination from "../../molecules/Pagination/Pagination";
import Input from "../../atoms/Input/Input";
import debounce from "lodash.debounce";
import styles from "./styles.module.scss";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

const BooksHistory = () => {
    /** Setup */
    const [inputValue, setInputValue] = useState("");

    /** Hooks */
    const { data, isLoading, setPage, setSearchTerm } = useBooksHistory();

    /** Handlers */
    const debounceSearchTerm = useCallback(debounce(setSearchTerm, 500), []);

    const handleValueChange = (value: string) => {
        setInputValue(value);
        debounceSearchTerm(value);
    };

    return (
        <div>
            <Input
                inputProps={{
                    value: inputValue,
                    placeholder: "Search...",
                }}
                label="Search"
                onChange={handleValueChange}
                boxStyle={{ marginBottom: "16px", maxWidth: "300px" }}
            />
            <div className={styles["books-history"]}>
                {isLoading ? <LoadingSpinner /> : ""}

                {data.data.length > 0 ? (
                    data.data.map((history) => (
                        <div
                            key={history.id}
                            className={styles["books-history__entry"]}
                        >
                            {history.message}
                        </div>
                    ))
                ) : (
                    <span className={styles["books-history__no-results"]}>
                        no results
                    </span>
                )}
            </div>
            <Pagination
                paginationData={data.pagination}
                handlePageChange={setPage}
            />
        </div>
    );
};

export default BooksHistory;
