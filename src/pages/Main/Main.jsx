import { useState } from "react";
import { AddInfoForm } from "../../containers/AddInfoForm/AddInfoForm";

export const Main = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
    };

    console.log("DATA: ", data);
  };

  return (
    <>
      <h1>Main Page</h1>
      <AddInfoForm
        setTitle={setTitle}
        setDescription={setDescription}
        submitForm={submitFormHandler}
      />
    </>
  );
};
