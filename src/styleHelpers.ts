import { FlexProps } from "./types";

export type MutateStyle = (element: HTMLElement, value?: any) => void;

export const [red, green, blue, light, dark, orange] = [
  "#002222",
  "lightgreen",
  "#00ffff",
  "#fefefe",
  "#111",
  "orange",
];

export const currentBg = (element: HTMLElement): string =>
  element.style.background;

export const height: MutateStyle = (element, height) => {
  element.style.height = height;
};

export const width: MutateStyle = (element, width) => {
  element.style.width = width;
};

export const bgLight: MutateStyle = (element) => {
  element.style.background = light;
};

export const bgOrange: MutateStyle = (element) => {
  element.style.background = orange;
};

export const bgDark: MutateStyle = (element) => {
  element.style.background = dark;
};

export const textLight: MutateStyle = (element) => {
  element.style.color = light;
};

export const textDark: MutateStyle = (element) => {
  element.style.color = light;
};

export const borderLight: MutateStyle = (element) => {
  element.style.border = `1px solid ${light}`;
};

export const borderDark: MutateStyle = (element) => {
  element.style.border = `1px solid ${dark}`;
};

export const flex: MutateStyle = (element, flexProps: FlexProps) => {
  element.style.display = "flex";
  Object.entries(flexProps).forEach(([k, v]) => {
    // @ts-ignore
    element.style[k] = v;
  });
};
