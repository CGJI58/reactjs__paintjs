import { useEffect, useRef, FC, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, modeState, widthState } from "../atoms";

const Canvas = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const CanvasComponent: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const { x, y } = mousePositionRef.current;
  const [drawing, setDrawing] = useState(false);
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const mode = useRecoilValue(modeState);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  if (canvas) {
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
  }

  return <Canvas ref={canvasRef} />;
};

export default CanvasComponent;
