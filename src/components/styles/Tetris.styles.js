import styled from "styled-components";

export const TetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  background-size: cover;
  overflow: hidden;
`;

export const Tetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
