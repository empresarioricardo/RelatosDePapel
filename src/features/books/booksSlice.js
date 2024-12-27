import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/db";
export const booksSlice = createSlice({
  name: "books",
  initialState: {
    Books: products || [],
    filterBooks: products || [],
  },
  reducers: {
    findBooks: (state, action) => {
      state.filterBooks = state.Books.filter((book) =>
        book.title
          .toLocaleUpperCase()
          .includes(action.payload.toLocaleUpperCase())
      );
    },
  },
});

export const { findBooks } = booksSlice.actions;
