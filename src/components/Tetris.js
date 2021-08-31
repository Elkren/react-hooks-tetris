import React from "react";

import * as S from "./styles/Tetris.styles";

import { createStage } from "../gameHelpers";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <S.TetrisWrapper>
      <S.Tetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </S.Tetris>
    </S.TetrisWrapper>
  );
};

export default Tetris;
