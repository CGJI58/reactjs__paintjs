import { useRecoilState } from "recoil";
import styled from "styled-components";
import { buttonState } from "../atoms";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
  const [btnCtrl, setBtnCtrl] = useRecoilState(buttonState);

  return (
    <Wrapper>
      {btnCtrl.drawMode ? (
        <Button
          onClick={() => {
            setBtnCtrl((prev) => ({ ...prev, drawMode: false }));
            console.log("Fill mode.");
          }}
        >
          Fill
        </Button>
      ) : (
        <Button
          onClick={() => {
            setBtnCtrl((prev) => ({ ...prev, drawMode: true }));
            console.log("Paint mode.");
          }}
        >
          Paint
        </Button>
      )}

      <Button
        onClick={() => setBtnCtrl((prev) => ({ ...prev, clear: !prev.clear }))}
      >
        Clear
      </Button>
    </Wrapper>
  );
}

export default Buttons;
