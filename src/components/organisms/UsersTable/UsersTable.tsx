/** React */
import { useCallback, useState } from "react";

/** Debounce */
import debounce from "lodash.debounce";

/** Hooks */
import useUsersTable from "../../../hooks/useUsersTable";
import Input from "../../atoms/Input/Input";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";
import Pagination from "../../molecules/Pagination/Pagination";
import UserTableRow from "../../molecules/UserTableRow/UserTableRow";

/** Styles */
import styles from "./styles.module.scss";

const UsersTable = () => {
    /** Setup */
    const [inputValue, setInputValue] = useState("");

    /** Hooks */
    const {
        data: users,
        isLoading,
        searchTerm,
        setSearchTerm,
        setPage,
    } = useUsersTable();

    /** Handlers */
    const debouncedSetSearchTerm = useCallback(
        debounce((term: string) => setSearchTerm(term), 500),
        []
    );

    const handleTermChange = (term: string) => {
        setInputValue(term);
        debouncedSetSearchTerm(term);
    };

    return (
        <>
            <Input
                inputProps={{ value: inputValue, placeholder: "Search..." }}
                onChange={handleTermChange}
                label="Search"
                boxStyle={{ marginBottom: "16px", maxWidth: "300px" }}
            />
            <div className={styles["users-table"]}>
                {isLoading && <LoadingSpinner />}

                {users.data.length > 0 ? (
                    users.data.map((user) => (
                        <UserTableRow key={user.id} user={user} />
                    ))
                ) : (
                    <div className={styles["users-table__no-results"]}>
                        no results
                    </div>
                )}
            </div>

            <Pagination
                paginationData={users.pagination}
                handlePageChange={setPage}
            />
        </>
    );
};

export default UsersTable;
