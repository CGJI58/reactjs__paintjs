import styled from "styled-components";

const COLORS = [
  "#2c2c2c",
  "white",
  "#ff3b30",
  "#ff9500",
  "#ffcc00",
  "#4cd963",
  "#5ac8fa",
  "#0579ff",
  "#5856d6",
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.color};
`;

function Palette() {
  return (
    <Wrapper>
      {COLORS.map((color) => (
        <ColorBox color={color} />
      ))}
    </Wrapper>
  );
}

export default Palette;
