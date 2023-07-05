/** Redux */
import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import { pdfModalSlice } from "./slices/pdfModal.slice";
import { searchModalSlice } from "./slices/searchModal.slice";
import { bookModalSlice } from "./slices/bookModal.slice";

export const store = configureStore({
    reducer: {
        pdfModal: pdfModalSlice.reducer,
        searchModal: searchModalSlice.reducer,
        bookModal: bookModalSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
