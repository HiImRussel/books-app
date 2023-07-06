/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "./../../types/user.types";

const initialState: { isOpen: boolean; user: User | null } = {
    isOpen: false,
    user: null,
};

export const userEditModalSlice = createSlice({
    name: "userEditModal",
    initialState,
    reducers: {
        openUserEditModal: (state, action: PayloadAction<User>) => ({
            isOpen: true,
            user: action.payload,
        }),
        closeUserEditModal: (state) => initialState,
    },
});

export const { openUserEditModal, closeUserEditModal } =
    userEditModalSlice.actions;

export default userEditModalSlice.reducer;
