import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modeState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: white;
  padding: 5px 0px;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
`;

function Buttons() {
  const [mode, setMode] = useRecoilState(modeState);

  return (
    <Wrapper>
      {mode ? (
        <Button onClick={() => setMode(false)}>Paint</Button>
      ) : (
        <Button onClick={() => setMode(true)}>Fill</Button>
      )}
      <Button>Save</Button>
    </Wrapper>
  );
}

export default Buttons;
