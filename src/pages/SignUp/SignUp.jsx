import { SignUpForm } from "containers";
import { useSelector } from "react-redux";

export const SignUp = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>SignUp Page</h1>
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <SignUpForm />
    </>
  );
};
