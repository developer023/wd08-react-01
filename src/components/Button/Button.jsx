// export const Button = ({children, onClickHandler}) => {
export const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
