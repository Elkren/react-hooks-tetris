import React from "react";
import * as S from "./styles/Display.styles";

const Display = ({ gameOver, text }) => (
  <S.Display gameOver={gameOver}>{text}</S.Display>
);

export default Display;
