import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import styles from "./ModalWindow.module.css";

export const ModalWindow = ({
  modalInfo,
  modalTitle,
  modalDescription,
  setModalTitle,
  setModalDescription,
  submitModalFormHandler,
  setIsOpenModal,
}) => {
  const { title, description } = modalInfo;

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onChangeTitle = (event) => {
    setModalTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setModalDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h2>Modal Window</h2>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <InputText
            placeholder="Title:"
            value={modalTitle || title}
            onChangeHandler={onChangeTitle}
          />
          <InputText
            placeholder="Description:"
            value={modalDescription || description}
            onChangeHandler={onChangeDescription}
          />

          <Button type="submit">Submit</Button>
          <Button onClickHandler={closeModal}>Close Modal</Button>
        </form>
      </div>
    </div>
  );
};
