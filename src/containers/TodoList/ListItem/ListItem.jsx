import { Button } from "../../../components/Button/Button";
import styles from "./ListItem.module.css";

export const ListItem = ({ id, title, description, deleteItemHandler }) => {
  const deleteItem = () => {
    deleteItemHandler(id);
  };

  return (
    <li className={styles.item}>
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
      </div>
      <Button onClickHandler={deleteItem}>Delete</Button>
    </li>
  );
};
