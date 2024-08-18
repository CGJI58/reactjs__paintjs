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
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const mode = useRecoilValue(modeState);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas?.getContext("2d") ?? null;
      canvas.height = canvas.offsetHeight;
      canvas.width = canvas.offsetWidth;
      if (context) {
        draw({
          context,
          color,
          width,
          mode,
          coordinates,
        });
      }
    }
  }, [color, width, mode, coordinates]);

  return (
    <Canvas
      ref={canvasRef}
      // onMouseMove={({ nativeEvent: { offsetX, offsetY } }) => {
      //   console.log(offsetX, offsetY);
      // }}
      onClick={({ nativeEvent: { offsetX, offsetY } }) => {
        setCoordinates({ x: offsetX, y: offsetY });
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

  context.beginPath();
  drawCircle(context, { x, y });
  handleMode(context, mode);
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
