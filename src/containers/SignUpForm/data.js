import * as yup from "yup";
// import { object, string, number, date, InferType } from 'yup';

export const schema = yup.object({
  username: yup.string().required("Username is required").min(2, "min - 2"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(4, "min - 4").required("Password is required"),
});
