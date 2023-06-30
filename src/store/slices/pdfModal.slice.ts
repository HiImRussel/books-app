/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
interface ModalState {
    isOpen: boolean;
    pdfURL: string;
}

const initialState: ModalState = {
    isOpen: false,
    pdfURL: "",
};

export const pdfModalSlice = createSlice({
    name: "favourities",
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ModalState>) =>
            action.payload,
    },
});

export const { toggleModal } = pdfModalSlice.actions;

export default pdfModalSlice.reducer;
