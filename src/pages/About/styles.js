import styled from "styled-components";
import { CloseIcon, BG_Weather } from "../../assets/index";

export const CloseIconStyled = styled(CloseIcon)`
  width: 160px;
  height: 160px;
  fill: red;
  cursor: pointer;

  &:hover {
    fill: blue;
  }
`;

export const BackgroundExample = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid red;
  background-image: url(${BG_Weather});
  background-repeat: no-repeat;
`;
