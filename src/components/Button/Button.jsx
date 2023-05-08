// export const Button = ({children, onClickHandler}) => {

export const Button = (props) => {
  return (
    <button type={props.type} onClick={props.qwer}>
      {props.children}
    </button>
  );
};
