import React from "react";
import * as S from "./styles/Cell.styles";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <S.Cell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
