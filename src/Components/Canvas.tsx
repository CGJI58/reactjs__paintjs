import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, modeState, widthState } from "../atoms";

const Canvas = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

interface ICoordinates {
  x: number;
  y: number;
}

function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    x: 0,
    y: 0,
  });
  const [drawOn, setDrawOn] = useState(false);
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const mode = useRecoilValue(modeState);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas?.getContext("2d") ?? null;
      canvas.height = canvas.offsetHeight;
      canvas.width = canvas.offsetWidth;
      if (context) {
        if (!drawOn) {
          //여기가 연속적으로 실행돼야하는데 안됨. mouseMove 내내 실행하게 바꿀 것.
          //마우스 움직이면서 마우스 버튼을 떼면 한번 실행됨.
          //마우스 멈추고 나서 마우스 버튼을 떼면 실행 안 됨.
          // context.beginPath();
          // context.moveTo(coordinates.x, coordinates.y);
          console.log("moving...");
        } else {
          draw({
            context,
            color,
            width,
            mode,
            coordinates,
          });
          console.log("drawing...");
        }
      }
    }
  }, [color, width, mode, coordinates]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseDownCapture={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        setDrawOn(true);
        setCoordinates({ x, y });
      }}
      onMouseUpCapture={() => setDrawOn(false)}
      onMouseOutCapture={() => setDrawOn(false)}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        if (drawOn) setCoordinates({ x, y });
      }}
    />
  );
}

interface IDraw {
  context: CanvasRenderingContext2D;
  color: string;
  width: number;
  mode: boolean;
  coordinates: ICoordinates;
}

const draw = ({
  context,
  color,
  width,
  mode,
  coordinates: { x, y },
}: IDraw) => {
  context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = width;

  // context.beginPath();
  drawCircle(context, { x, y });
  handleMode(context, mode);
  // context.lineTo(x, y);
  // context.stroke();
};

const drawCircle = (
  context: CanvasRenderingContext2D,
  { x, y }: ICoordinates
) => {
  context.arc(x, y, 20, 0, 2 * Math.PI);
};

const handleMode = (context: CanvasRenderingContext2D, mode: boolean) => {
  mode ? context.stroke() : context.fill();
};

export default CanvasComponent;
