import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
};

const booksSlice = createSlice({
  name: "BOOKS",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
