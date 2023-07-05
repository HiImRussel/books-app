/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
import { BooksApiBook } from "../../types/booksApi.types";

const initialState: { isOpen: boolean; book: BooksApiBook | null } = {
    isOpen: false,
    book: null,
};

export const bookModalSlice = createSlice({
    name: "bookModal",
    initialState,
    reducers: {
        openBookModal: (state, action: PayloadAction<BooksApiBook>) => ({
            isOpen: true,
            book: action.payload,
        }),
        closeBookModal: (state) => initialState,
    },
});

export const { openBookModal, closeBookModal } = bookModalSlice.actions;

export default bookModalSlice.reducer;
