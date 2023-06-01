import { axiosPrivate } from "./interceptors";
import axios from "axios";

export const getBooks = async () => {
  const books = await axios.get("https://api.itbook.store/1.0/new");

  return books.data;
};
