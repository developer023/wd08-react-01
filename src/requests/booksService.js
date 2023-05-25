import axios from "axios";

// export const getBooks = async () => {
// const response = await fetch("https://api.itbook.store/1.0/new");
//   const books = await response.json();

//   return books;
// };

// const { data } = await axios.get("https://api.itbook.store/1.0/new");
export const getBooks = async (setError) => {
  try {
    const books = await axios.get("https://api.itbook.store/1.0/new");

    return books.data;
  } catch (error) {
    // const errorInfo = getErrorInfo(error.response.status)
    setError("Error Text");
    // if (error.response.message === "Error Text") {
    // }
    // if (error.response.status === 404) {
    //   setError("GET_BOOKS ERROR");
    // }
    //                     // true || false
    // if (error.response.statusOk === 404) {
    //   setError("GET_BOOKS ERROR");
    // }
    // console.log("GET_BOOKS ERROR:", error);
  }
};

export const updateBook = async (data) => {
  try {
    const updatedBook = await axios.post(
      "https://api.itbook.store/1.0/new",
      data
    );

    return updatedBook;
  } catch (error) {
    if (error.response.message === "Error Text") {
      return "Error Text";
    }

    if (error.response.status === 404) {
    }
    console.log("UPDATE_BOOK ERROR:", error);
  }
};
