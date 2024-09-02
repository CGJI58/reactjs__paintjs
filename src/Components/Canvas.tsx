import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, buttonState, widthState } from "../atoms";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const CANVAS_COLOR = "#f5f5f5";
const MAGNIFICATION = 2;

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
      canvas.height = canvas.offsetHeight * MAGNIFICATION;
      canvas.width = canvas.offsetWidth * MAGNIFICATION;
      if (context) {
        context.fillStyle = color;
        context.strokeStyle = color;
        context.lineWidth = width;
      }
    }
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas
        .getContext("2d")
        ?.clearRect(
          0,
          0,
          CANVAS_WIDTH * MAGNIFICATION,
          CANVAS_HEIGHT * MAGNIFICATION
        );
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
            context.fillRect(
              0,
              0,
              CANVAS_WIDTH * MAGNIFICATION,
              CANVAS_HEIGHT * MAGNIFICATION
            );
          }
        }
      }}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        const canvas = canvasRef.current?.getContext("2d");
        x *= MAGNIFICATION;
        y *= MAGNIFICATION;
        if (drawOn && canvas) {
          canvas.strokeStyle = color;
          canvas.lineWidth = width;
          canvas.lineTo(x, y);
          canvas.stroke();
        }
      }}
    />
  );
}

export default CanvasComponent;
