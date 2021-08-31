import React from "react";

import * as S from "./styles/Stage.styles";

import Cell from "./Cell";

const Stage = ({ stage }) => (
  <S.Stage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </S.Stage>
);

export default Stage;
