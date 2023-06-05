import styles from "./Button.module.scss";
// export const Button = ({onClickHandler, children}) => {
export const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`
      ${styles.default} 
      ${styles[props.size]} 
      ${props.disabled ? styles.disabled : ""}
      `}
      type={props.type}
      onClick={props.onClickHandler}
      ref={props.ref}
    >
      {props.children}
    </button>
  );
};
