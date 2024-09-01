import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, buttonState, widthState } from "../atoms";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const CANVAS_COLOR = "#f5f5f5"; //요 색깔로 fill하는거를 지우개로 사용할 것.

const Canvas = styled.canvas`
  width: ${CANVAS_WIDTH}px;
  height: ${CANVAS_HEIGHT}px;
  background-color: ${CANVAS_COLOR};
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawOn, setDrawOn] = useState(false);
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const buttons = useRecoilValue(buttonState);
  const canvas = canvasRef.current;

  useEffect(() => {
    if (canvas) {
      const context = canvas.getContext("2d");
      canvas.height = canvas.offsetHeight * 2;
      canvas.width = canvas.offsetWidth * 2;
      if (context) {
        context.fillStyle = color;
        context.strokeStyle = color;
        context.lineWidth = width;
      }
    }
  }, []);

  interface IDrawLine {
    x: number;
    y: number;
    canvas: CanvasRenderingContext2D;
  }

  const drawLine = ({ x, y, canvas }: IDrawLine) => {
    canvas.strokeStyle = color;
    canvas.lineWidth = width;
    canvas.lineTo(x, y);
    canvas.stroke();
  };

  useEffect(() => {
    if (canvas) {
      canvas
        .getContext("2d")
        ?.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT * 2);
    }
  }, [buttons.clear]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseUpCapture={() => setDrawOn(false)}
      onMouseOutCapture={() => setDrawOn(false)}
      onMouseDownCapture={() => {
        const context = canvas?.getContext("2d");
        if (buttons.drawMode) {
          setDrawOn(true);
          context?.beginPath();
        } else {
          if (context) {
            context.fillStyle = color;
            context.fillRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT * 2);
          }
        }
      }}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        const canvas = canvasRef.current?.getContext("2d");
        x *= 2;
        y *= 2;
        if (drawOn && canvas) {
          drawLine({ x, y, canvas });
        }
      }}
    />
  );
}

export default CanvasComponent;
