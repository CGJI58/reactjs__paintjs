import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
  background-color: rgb(60, 100, 60);
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

function App() {
  return (
    <Wrapper>
      <Canvas />
      <div className="controls">
        <div className="controls__range">
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="5"
            value="2.5"
            step="0.1"
          />
        </div>

        {/*Component 분리*/}
        <div className="controls__btns">
          <button id="jsMode">Fill</button>
          <button id="jsSave">Save</button>
        </div>

        {/*Component 분리*/}
        <div className="controls__colors" id="jsColors">
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
          <div className="controls__color jsColor"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
