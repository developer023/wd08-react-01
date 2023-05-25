import { ButtonTwoStyled } from "./ButtonTwoStyle";

export const ButtonTwo = ({ type, children, onClick, size }) => {
  return (
    <ButtonTwoStyled type={type} onClick={onClick} size={size}>
      {children}
    </ButtonTwoStyled>
  );
};
