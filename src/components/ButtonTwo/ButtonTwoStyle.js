import { styled } from "styled-components";
import Button from "@mui/material/Button";

// export const ButtonTwoStyled = styled.button`
export const ButtonTwoStyled = styled(Button)`
  padding: ${({ size }) =>
    size === "small"
      ? "0.5rem 1rem"
      : size === "large"
      ? "3rem 4rem"
      : "1rem 2rem"};
  border: 2px solid purple !important;
  border-radius: 5px;
  background-color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: purple;
    color: white;
  }
`;
