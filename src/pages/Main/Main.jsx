import { useState } from "react";
import { AddUserForm } from "../../containers/AddUserForm/AddUserForm";
import { Footer } from "../../containers/Footer/Footer";

export const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitUserHandler = (event) => {
    event.preventDefault();
    console.log("USER:", name, age);
  };

  return (
    <>
      <div>
        <h1>Main Page</h1>
        <AddUserForm
          setUserName={setName}
          setUserAge={setAge}
          submitUser={submitUserHandler}
        />
      </div>
      <Footer />
    </>
  );
};
