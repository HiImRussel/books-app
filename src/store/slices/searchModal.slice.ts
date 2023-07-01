/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

export const searchModalSlice = createSlice({
    name: "searchModal",
    initialState,
    reducers: {
        toggleSeachModal: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;

            return state;
        },
    },
});

export const { toggleSeachModal } = searchModalSlice.actions;

export default searchModalSlice.reducer;
