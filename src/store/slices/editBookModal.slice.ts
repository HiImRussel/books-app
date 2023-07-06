/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
import { BooksApiBook } from "../../types/booksApi.types";

const initialState: { isOpen: boolean; book: BooksApiBook | null } = {
    isOpen: false,
    book: null,
};

export const editBookModalSlice = createSlice({
    name: "editBookModal",
    initialState,
    reducers: {
        openEditBookModal: (state, action: PayloadAction<BooksApiBook>) => ({
            isOpen: true,
            book: action.payload,
        }),
        closeEditBookModal: (state) => initialState,
    },
});

export const { openEditBookModal, closeEditBookModal } =
    editBookModalSlice.actions;

export default editBookModalSlice.reducer;
