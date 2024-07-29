import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Canvas = styled.canvas`
  width: 300px;
  height: 300px;
  border: 1px solid pink;
`;

function App() {
  return (
    <Wrapper>
      <Canvas />
      <div class="controls">
        <div class="controls__range">
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="5"
            value="2.5"
            step="0.1"
          />
        </div>

        <div class="controls__btns">
          <button id="jsMode">Fill</button>
          <button id="jsSave">Save</button>
        </div>

        <div class="controls__colors" id="jsColors">
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
          <div class="controls__color jsColor"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
