import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./SignUpForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { booksActions } from "redux/books/slice";
import { schema } from "./data";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { loading, error, books } = useSelector((state) => state.books);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    // updateBook(data);
  };

  const getBooksHandler = async () => {
    dispatch(booksActions.getBooksThunk());
  };

  useEffect(() => {
    if (!books && !error) {
      dispatch(booksActions.getBooksThunk());
    }
  }, [dispatch, books, error]);

  useEffect(() => {
    return () => {
      dispatch(booksActions.setDefaultError());
    };
  }, [dispatch]);

  return (
    <>
      <Button onClickHandler={getBooksHandler}>Get Books</Button>
      {loading && <div>Loading...</div>}

      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.isbn13}>{book.title}</li>
          ))}
        </ul>
      )}

      {error && <div className={styles.error}>{error.message}</div>}

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
