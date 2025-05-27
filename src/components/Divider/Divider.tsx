import { Color } from "@/foundation/Color/Color";
import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  color: Color;
}

const getClassNameByColor = (color: Color) => {
  switch (color) {
    case "primary":
      return "border-primary";
    case "secondary":
      return "border-secondary";
    case "black":
      return "border-black";
    case "gray0":
      return "border-gray0";
    case "gray1":
      return "border-gray1";
    case "gray2":
      return "border-gray2";
    case "gray3":
      return "border-gray3";
    case "gray4":
      return "border-gray4";
    case "gray5":
      return "border-gray5";
    case "gray6":
      return "border-gray6";
    case "gray7":
      return "border-gray7";
    case "white":
      return "border-white";
  }
};

export const Divider = ({ color, className, ...props }: DividerProps) => (
  <hr
    {...props}
    className={[className ?? "", getClassNameByColor(color)].join(" ").trim()}
  />
);
