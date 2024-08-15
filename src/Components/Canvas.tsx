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

function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
        draw({ context, color, width, mode });
      }
    }
  }, [color, width, mode]);

  return <Canvas ref={canvasRef} />;
}

interface IDraw {
  context: CanvasRenderingContext2D;
  color: string;
  width: number;
  mode: boolean;
}

const draw = ({ context, color, width, mode }: IDraw) => {
  context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = width;
  console.log(mode);
  context.beginPath();
  context.arc(200, 200, 190, 0, 2 * Math.PI);
  if (mode) {
    context.stroke();
  } else {
    context.fill();
  }
};

export default CanvasComponent;
