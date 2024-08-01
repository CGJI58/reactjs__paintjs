import styled from "styled-components";

const Wrapper = styled.div``;

function LineWidth() {
  return (
    <Wrapper>
      <input
        type="range"
        id="jsRange"
        min="0.1"
        max="5"
        value="2.5"
        step="0.1"
      />
    </Wrapper>
  );
}

export default LineWidth;
