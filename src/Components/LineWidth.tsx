import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { widthState } from "../atoms";

const MAX_WIDTH = 20;

const Wrapper = styled.div``;

function LineWidth() {
  const [width, setWidth] = useState(MAX_WIDTH / 2);
  const setWidthState = useSetRecoilState(widthState);

  const handleChange = (event: any) => {
    setWidthState(+event.target.value);
    console.log("line width : ", width);
  };
  return (
    <Wrapper>
      <input
        type="range"
        id="jsRange"
        min="2"
        max={MAX_WIDTH}
        value={width}
        step="2"
        onChange={(event) => setWidth(+event.target.value)}
        onMouseUp={handleChange}
      />
    </Wrapper>
  );
}

export default LineWidth;
