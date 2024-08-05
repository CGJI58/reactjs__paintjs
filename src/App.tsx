import styled from "styled-components";
import Buttons from "./Components/Buttons";
import Palette from "./Components/Palette";
import LineWidth from "./Components/LineWidth";
import Canvas from "./Components/Canvas";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { colorState, widthState } from "./atoms";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

const Controls = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function App() {
  const colorPick = useRecoilValue(colorState);
  const widthPick = useRecoilValue(widthState);
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
