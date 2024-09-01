import styled from "styled-components";
import Buttons from "./Components/Buttons";
import Palette from "./Components/Palette";
import LineWidth from "./Components/LineWidth";
import Canvas from "./Components/Canvas";
import { useRecoilValue } from "recoil";
import { colorState, widthState } from "./atoms";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0px;
  background-color: gray;
`;

const Controls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0 30px;
  }
`;

const ControlsLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ControlsRightSide = styled.div``;

function App() {
  return (
    <Wrapper>
      <Canvas />
      <Controls>
        <ControlsLeftSide>
          <Palette />
          <LineWidth />
        </ControlsLeftSide>
        <ControlsRightSide>
          <Buttons />
        </ControlsRightSide>
      </Controls>
    </Wrapper>
  );
}

export default App;
