import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, modeState, widthState } from "../atoms";

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const Canvas = styled.canvas`
  width: ${CANVAS_WIDTH}px;
  height: ${CANVAS_HEIGHT}px;
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
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
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
        context.fillStyle = color;
        context.strokeStyle = color;
        context.lineWidth = width;
      }
    }
  }, [color, width, mode]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseDownCapture={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        const canvas = canvasRef.current?.getContext("2d");
        setDrawOn(true);
        setCoordinates({ x, y });
        canvas?.beginPath();
      }}
      onMouseUpCapture={() => setDrawOn(false)}
      onMouseOutCapture={() => setDrawOn(false)}
      onMouseMove={({ nativeEvent: { offsetX: x, offsetY: y } }) => {
        const canvas = canvasRef.current?.getContext("2d");
        if (drawOn) {
          setCoordinates({ x, y });
          canvas?.lineTo(x, y);
          canvas?.stroke();
        }
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
  pointer(context, width, { x, y });
  handleMode(context, mode);
  // context.lineTo(x, y);
  // context.stroke();
};

const pointer = (
  context: CanvasRenderingContext2D,
  width: number,
  { x, y }: ICoordinates
) => {
  context.arc(x, y, Math.max(2, width), 0, 2 * Math.PI);
};

const handleMode = (context: CanvasRenderingContext2D, mode: boolean) => {
  mode ? context.stroke() : context.fill();
};

export default CanvasComponent;
