import { dom } from "@wallerbuilt/mycelia";
import {
  bgLight,
  bgOrange,
  borderDark,
  borderLight,
  currentBg,
  height,
  MutateStyle,
  orange,
  width,
} from "./styleHelpers";
import { OnClick } from "./types";

const { button } = dom;

const buttonLight: MutateStyle = (element) => {
  bgLight(element);
  borderDark(element);
};

const buttonOrange: MutateStyle = (element) => {
  bgOrange(element);
  borderLight(element);
};

const toggleOnOff = (e: OnClick) => {
  if (currentBg(e.target) === orange) {
    buttonLight(e.target);
  } else {
    buttonOrange(e.target);
  }
};

const LatchBtn = (cb?: (n: number) => void) => (index: number) => {
  const handleClick = (e: OnClick) => {
    toggleOnOff(e);

    if (cb) {
      cb(index);
    }
  };

  const el = button(
    {
      textContent: `${index}`,
      onclick: handleClick,
    },
    ""
  ) as HTMLButtonElement;

  // apply styles
  bgLight(el);
  borderDark(el);
  height(el, "30px");
  width(el, "30px");

  return el;
};

export default LatchBtn;
