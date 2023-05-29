import { useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./SignUpForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { booksActions } from "redux/books/slice";

import { schema } from "./data";
// import pagesRoutes from "../../routes/pagesRoutes";
import { getBooks } from "../../requests/booksService";
import { ErrorContext } from "../../context/error/errorContext";

export const SignUpForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  // const [error, setError] = useState(null);
  const { error, setError } = useContext(ErrorContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    // updateBook(data);
  };

  const getBooksHandler = async () => {
    const response = await getBooks(); // error
    if (response) {
      const books = response.books;

      console.log("Books: ", books);
      // navigate(pagesRoutes.MAIN);
    } else {
      setError("Sign Up Error");
    }
  };

  const getBooksUseEffect = async () => {
    const response = await getBooks(setError);
    if (response) {
      const books = response.books;
      // setData(books);

      dispatch(booksActions.setBooks(books));
    }
  };

  useEffect(() => {
    if (!books) {
      getBooksUseEffect();
    }
  }, [books, dispatch, getBooksUseEffect]);

  console.log("books: ", books);

  // 1 монтирование - при загрузке компоненты
  // 2 обновление - при изменении любой зависимости

  return (
    <>
      <Button onClickHandler={getBooksHandler}>Get Books</Button>
      {!books && <div>Loading...</div>}

      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.isbn13}>{book.title}</li>
          ))}
        </ul>
      )}

      {error && <div className={styles.error}>{error}</div>}

      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h4>SignUp Form</h4>
        <InputText
          placeholder="Username:"
          errorMessage={errors.username?.message}
          {...register("username")}
        />
        <InputText
          placeholder="Email:"
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <InputText
          placeholder="Password:"
          errorMessage={errors.password?.message}
          {...register("password")}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
