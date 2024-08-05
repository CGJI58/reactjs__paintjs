import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, widthState } from "../atoms";

const Board = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: rgb(60, 100, 60);
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

function Canvas() {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = useRecoilValue(widthState);
  const color = useRecoilValue(colorState);

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        setContext(renderCtx);
      }
    }
  }, [context]);
  canvasRef.current?.click();
  return <Board onClick={() => console.log(width, color)} />;
}

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

export default Canvas;
