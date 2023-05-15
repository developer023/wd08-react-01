export const InputText = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      value={props.value}
    />
  );
};
