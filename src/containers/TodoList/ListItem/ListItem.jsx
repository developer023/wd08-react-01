import { Button } from "../../../components/Button/Button";
import styles from "./ListItem.module.css";

export const ListItem = ({
  id,
  title,
  description,
  setIsOpenModal,
  deleteItemHandler,
  editItemHandler,
}) => {
  const deleteItem = () => {
    deleteItemHandler(id);
  };

  const editItem = () => {
    setIsOpenModal(true);
    editItemHandler({ id, title, description });
  };

  return (
    <li className={styles.item}>
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
      </div>
      <Button onClickHandler={deleteItem}>Delete</Button>
      <Button onClickHandler={editItem}>Edit</Button>
    </li>
  );
};
