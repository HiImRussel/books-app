/** React */
import { useEffect, useState } from "react";

/** Hooks */
import usePagination from "./usePagination";
import useResource from "./useResource";
import useObservable from "./useObservable";

/** RXJS Store */
import { usersRefreshTrigger$ } from "../rxjsStore/usersRefresh.rxjs-store";

/** Services */
import UsersServiceInstance from "../services/users.service";

/** Constants */
import { DEFAULT_DATA_FOR_USE_RESOURCE } from "../constants/api";

/** Types */
import { User } from "../types/user.types";
import { PaginationApi } from "../types/paginationApi.types";

const useUsersTable = () => {
    /** Setup */
    const [searchTerm, setSearchTerm] = useState("");

    /** Hooks */
    const refreshUsers = useObservable(usersRefreshTrigger$);
    const { page, setPage } = usePagination();
    const { data, isLoading } = useResource<{
        data: User[];
        pagination: PaginationApi;
    }>(
        UsersServiceInstance.getUsers,
        DEFAULT_DATA_FOR_USE_RESOURCE,
        [searchTerm, page],
        [searchTerm, page, refreshUsers],
        1
    );

    /** Lifecycle */
    useEffect(() => {
        if (data?.pagination?.totalPages >= page) return;

        setPage(1);
    }, [data]);

    useEffect(() => {
        setPage(1);
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        data,
        isLoading,
    };
};

export default useUsersTable;
