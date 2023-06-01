import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "requests/booksService";

export const getBooksThunk = createAsyncThunk("books/getBooks", async () => {
  const result = await getBooks();
  return result.books;
});
