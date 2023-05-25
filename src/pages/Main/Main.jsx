import { useContext, useState, useEffect } from "react";
import { AddInfoForm } from "../../containers/AddInfoForm/AddInfoForm";
import { TodoList } from "../../containers/TodoList/TodoList";
import { ModalWindow } from "../../containers/ModalWindow/ModalWindow";

import { UserContext } from "../../context/user/userContext";

export const Main = () => {
  const user = useContext(UserContext);

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
      {/* { false && true } */}
      {/* { true && true } */}
    </>
  );
};
