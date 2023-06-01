import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/counter/slice";
import booksReducer from "redux/books/slice";
import userReducer from "redux/user/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    user: userReducer,
  },
});
