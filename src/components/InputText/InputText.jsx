import { forwardRef } from "react";
import styles from "./InputText.module.css";

export const InputText = forwardRef(
  ({ placeholder, onChangeHandler, value, errorMessage, ...rest }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
          ref={ref}
          {...rest}
        />
        {errorMessage && <small className={styles.error}>{errorMessage}</small>}
      </div>
    );
  }
);
