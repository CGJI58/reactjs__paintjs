import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { widthState } from "../atoms";

const MAX_WIDTH = 5;

const Wrapper = styled.div``;

function LineWidth() {
  const [width, setWidth] = useState(MAX_WIDTH / 2);
  const setWidthState = useSetRecoilState(widthState);

  const handleChange = (event: any) => {
    setWidthState(+event.target.value);
  };
  return (
    <Wrapper>
      <input
        type="range"
        id="jsRange"
        min="0.2"
        max={MAX_WIDTH}
        value={width}
        step="0.2"
        onChange={(event) => setWidth(+event.target.value)}
        onMouseUp={handleChange}
      />
    </Wrapper>
  );
}

export default LineWidth;
