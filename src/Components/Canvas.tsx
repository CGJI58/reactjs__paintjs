import styled from "styled-components";

const Board = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: rgb(60, 100, 60);
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

function Canvas() {
  return <Board />;
}

export default Canvas;
