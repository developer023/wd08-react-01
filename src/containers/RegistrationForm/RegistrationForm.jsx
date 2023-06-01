import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { schema } from "./data";
import { signUp } from "requests/authService";
import { userActions } from "redux/user/slice";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    const result = await signUp(data);
    const accessToken = result.accessToken;
    const user = result.user;

    localStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("accessToken", accessToken);

    dispatch(userActions.setUser(user));
  };

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");

    dispatch(userActions.removeUser());
  };

  return (
    <>
      <Button onClickHandler={logoutHandler}>LOGOUT</Button>

      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h4>Registration Form</h4>
        <InputText
          placeholder="Firstname:"
          errorMessage={errors.firstname?.message}
          {...register("firstname")}
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
