export const InputText = (props) => {
  return (
    <input
      type="text"
      onChange={props.onChangeHandler}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};
