/** Redux */
import { createSlice } from "@reduxjs/toolkit";

/** Init */
const favourities = localStorage.getItem("favourities");

/** Types */
import type { PayloadAction } from "@reduxjs/toolkit";
interface FavouritiesState {
    books: Book[];
}

const initialState: FavouritiesState = {
    books: favourities ? JSON.parse(favourities) : [],
};

export const favouritiesSlice = createSlice({
    name: "favourities",
    initialState,
    reducers: {
        toggleFavourite: (state, action: PayloadAction<Book>) => {
            const isOnList = state.books.find(
                (book) => book.id === action.payload.id
            );
            const list = { books: [...state.books] };

            if (isOnList) {
                list.books = state.books.filter(
                    (book) => book.id !== action.payload.id
                );
            } else {
                list.books = [...list.books, action.payload];
            }

            localStorage.setItem("favourities", JSON.stringify(list.books));

            return list;
        },
    },
});

export const { toggleFavourite } = favouritiesSlice.actions;

export default favouritiesSlice.reducer;
