import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./SignInForm.module.css";
import { useDispatch } from "react-redux";
import { schema } from "./data";
import { signIn } from "requests/authService";
import { userActions } from "redux/user/slice";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    const result = await signIn(data);
    const accessToken = result.accessToken;
    const user = result.user;

    localStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("accessToken", accessToken);

    dispatch(userActions.setUser(user));
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <h4>SignIn Form</h4>
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
