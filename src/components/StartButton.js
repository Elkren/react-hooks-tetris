import React from "react";
import * as S from "./styles/StartButton.styles";

const StartButton = ({ callback }) => (
  <S.StartButton onClick={callback}>Start Game</S.StartButton>
);

export default StartButton;
