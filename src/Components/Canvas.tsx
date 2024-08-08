import { useEffect, useRef, FC } from "react";
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
  const color = useRecoilValue(colorState);
  const width = useRecoilValue(widthState);
  const mode = useRecoilValue(modeState);

  const handleMouseMove = (event: MouseEvent) => {
    if (canvasRef.current) {
      mousePositionRef.current = {
        x: event.offsetX,
        y: event.offsetY,
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      // onMouseMove={() => console.log(mousePositionRef.current)}
      onMouseDown={onPainting}
      onMouseUp={stopPainting}
      onMouseLeave={stopPainting}
      onClickCapture={onClick}
      onContextMenu={onContextMenu}
    />
  );
};

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

export default CanvasComponent;
