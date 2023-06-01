import * as yup from "yup";
// import { object, string, number, date, InferType } from 'yup';

export const schema = yup.object({
  firstname: yup.string().required("Firstname is required").trim(),
  email: yup.string().required("Email is required").trim(),
  password: yup.string().required("Password is required").trim(),
});
