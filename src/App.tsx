import styled from "styled-components";
import Buttons from "./Components/Buttons";
import Palette from "./Components/Palette";
import LineWidth from "./Components/LineWidth";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

const Canvas = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: rgb(60, 100, 60);
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Controls = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function App() {
  return (
    <Wrapper>
      <Canvas />
      <Controls>
        <Palette />
        <LineWidth />
        <Buttons />
      </Controls>
    </Wrapper>
  );
}

export default App;
