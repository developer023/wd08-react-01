import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import styles from "./AddInfoForm.module.scss";

export const AddInfoForm = (props) => {
  const onChangeTitle = (event) => {
    props.setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    props.setDescription(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={props.submitForm}>
      <h4>Add Info Form</h4>
      <InputText placeholder="Title:" onChangeHandler={onChangeTitle} />
      <InputText
        placeholder="Description:"
        onChangeHandler={onChangeDescription}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};
