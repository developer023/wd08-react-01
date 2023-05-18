import React, { useContext } from "react";
import { UserContext } from "../../context/user/userContext";

export const SignUp = () => {
  // const user = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>SignUp Page</h1>
    </>
  );
};
