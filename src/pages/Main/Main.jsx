import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// import { countSelector } from "redux/counter/selectors";
import { counterActions } from "redux/counter/slice";

import { AddInfoForm, TodoList, ModalWindow } from "containers";
import { ButtonTwo } from "../../components/ButtonTwo/ButtonTwo";
// import { UserContext } from "../../context/user/userContext";

import Button from "@mui/material/Button";

export const Main = () => {
  // const user = useContext(UserContext);
  const count = useSelector((state) => state.counter.count);
  // const count = useSelector(countSelector);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalInfo, setModalInfo] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const editItemHandler = ({ id, title, description }) => {
    setModalInfo({ id, title, description });
  };

  const submitModalFormHandler = (event) => {
    const newData = data.map((item) => {
      if (item.id === modalInfo.id) {
        return {
          ...item,
          title: modalTitle,
          description: modalDescription,
        };
      }
      return item;
    });

    setIsOpenModal(false);
    setData(newData);
    setModalInfo(null);
    setModalTitle("");
    setModalDescription("");
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <ButtonTwo size="small">small Button Two</ButtonTwo>
      <ButtonTwo size="default">default Button Two</ButtonTwo>
      <ButtonTwo size="large">large Button Two</ButtonTwo>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>

      <h1>Main Page</h1>
      <AddInfoForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        submitForm={submitFormHandler}
      />
      <TodoList
        data={data}
        setIsOpenModal={setIsOpenModal}
        deleteItemHandler={deleteItemHandler}
        editItemHandler={editItemHandler}
      />
      {isOpenModal && (
        <ModalWindow
          modalInfo={modalInfo}
          modalTitle={modalTitle}
          modalDescription={modalDescription}
          setModalTitleHandler={setModalTitle}
          setModalDescription={setModalDescription}
          submitModalFormHandler={submitModalFormHandler}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "400px",
          margin: "0 auto",
        }}
      >
        <ButtonTwo size="small" onClick={incrementHandler}>
          Increment +1
        </ButtonTwo>
        <ButtonTwo size="small" onClick={decrementHandler}>
          Decrement -1
        </ButtonTwo>
      </div>
      {/* { true && true } */}
    </>
  );
};
