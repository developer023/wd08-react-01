import * as yup from "yup";
// import { object, string, number, date, InferType } from 'yup';

export const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
