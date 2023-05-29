import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/counter/slice";
import booksReducer from "redux/books/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
});
