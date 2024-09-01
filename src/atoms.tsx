import { atom } from "recoil";

export const COLORS = [
  "#2c2c2c",
  "white",
  "#ff3b30",
  "#ff9500",
  "#ffcc00",
  "#4cd963",
  "#5ac8fa",
  "#0579ff",
  "#5856d6",
];

export const colorState = atom<string>({
  key: "color",
  default: COLORS[0],
});

export const widthState = atom<number>({
  key: "width",
  default: 10,
});

interface IButtonState {
  drawMode: boolean;
  clear: boolean;
  save: boolean;
}

/**
 * In drawMode
 * @true Paint mode
 * @false Fill mode
 */
export const buttonState = atom<IButtonState>({
  key: "mode",
  default: {
    drawMode: true,
    clear: true,
    save: true,
  },
});
