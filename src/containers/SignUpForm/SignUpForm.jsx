import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import styles from "./SignUpForm.module.css";

import { schema } from "./data";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log("Submit: ", data);
  };

  return (
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
  );
};
