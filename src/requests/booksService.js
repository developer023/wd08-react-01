import axios from "axios";

export const getBooks = async () => {
  const books = await axios.get("https://api.itbook.store/1.0/new1");

  return books.data;
};
