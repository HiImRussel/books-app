/** Types */
import { PaginationApi } from "./paginationApi.types";

export interface HistoryEntry {
    id: number;
    message: string;
}

export interface HistoryResponse {
    data: HistoryEntry[];
    pagination: PaginationApi;
}
