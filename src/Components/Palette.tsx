import styled from "styled-components";
import { COLORS, colorState } from "../atoms";
import { useSetRecoilState } from "recoil";

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
  const setColor = useSetRecoilState(colorState);
  return (
    <Wrapper>
      {COLORS.map((color) => (
        <ColorBox
          key={color}
          color={color}
          onClick={() => {
            setColor(color);
            console.log("color:", color);
          }}
        />
      ))}
    </Wrapper>
  );
}

export default Palette;
