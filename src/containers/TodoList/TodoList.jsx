import React from "react";
import { ListItem } from "./ListItem/ListItem";

import styles from "./TodoList.module.css";

// export const TodoList = ({data}) => {
export const TodoList = (props) => {
  return (
    <ul className={styles.list}>
      <h4>TodoList</h4>
      {props.data.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          deleteItemHandler={props.deleteItemHandler}
        />
      ))}
    </ul>
  );
};
