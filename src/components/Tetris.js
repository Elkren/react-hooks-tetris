import React, { useState } from "react";

import * as S from "./styles/Tetris.styles";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <S.TetrisWrapper>
      <S.Tetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </S.Tetris>
    </S.TetrisWrapper>
  );
};

export default Tetris;
