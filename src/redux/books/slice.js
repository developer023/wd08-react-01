import { createSlice } from "@reduxjs/toolkit";
import { getBooksThunk } from "./thunks";

const initialState = {
  loading: false,
  error: null,
  books: null,
};

const booksSlice = createSlice({
  name: "BOOKS",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
    setDefaultError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // pending
    // fulfilled
    // rejected
    builder.addCase(getBooksThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooksThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.books = payload;
    });
    builder.addCase(getBooksThunk.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error;
    });
  },
});

// export const booksActions = booksSlice.actions;
export const booksActions = { ...booksSlice.actions, getBooksThunk };

export default booksSlice.reducer;
