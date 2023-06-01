import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Email is required").trim(),
  password: yup.string().required("Password is required").trim(),
});
