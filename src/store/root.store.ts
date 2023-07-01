/** Redux */
import { configureStore } from "@reduxjs/toolkit";

/** Slices */
import { favouritiesSlice } from "./slices/favourities.slice";
import { pdfModalSlice } from "./slices/pdfModal.slice";
import { searchModalSlice } from "./slices/searchModal.slice";

export const store = configureStore({
    reducer: {
        favourities: favouritiesSlice.reducer,
        pdfModal: pdfModalSlice.reducer,
        searchModal: searchModalSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
