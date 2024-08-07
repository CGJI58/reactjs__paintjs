import { useEffect, useRef, FC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { colorState, modeState, widthState } from "../atoms";

const Board = styled.canvas`
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
  border-radius: 15px;
  box-shadow: 0 4px 60x rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const mode = useRecoilValue(modeState);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = color;
        ctx.lineWidth = width;
      }
    }
  }, [color]);

  return (
    <Board
      ref={canvasRef}
      onMouseMove={onMouseMove}
      onMouseDown={onPainting}
      onMouseUp={stopPainting}
      onMouseLeave={stopPainting}
      onClickCapture={onClick}
      onContextMenu={onContextMenu}
    />
  );
}

function onMouseMove() {
  console.log("moving...");
}

function onPainting() {
  console.log("Painting...");
}

function stopPainting() {
  console.log("stop Painting.");
}

function onClick() {
  console.log("clicked.");
}

function onContextMenu() {
  console.log("handleCM...");
}

export default Canvas;
