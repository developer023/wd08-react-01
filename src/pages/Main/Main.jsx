import { useState } from "react";
import { AddInfoForm } from "../../containers/AddInfoForm/AddInfoForm";
import { TodoList } from "../../containers/TodoList/TodoList";

export const Main = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newData = {
      id: Date.now(),
      title,
      description,
    };

    setData([...data, newData]);
    event.target.reset();
  };

  const deleteItemHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <>
      <h1>Main Page</h1>
      <AddInfoForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        submitForm={submitFormHandler}
      />
      <TodoList data={data} deleteItemHandler={deleteItemHandler} />
    </>
  );
};
