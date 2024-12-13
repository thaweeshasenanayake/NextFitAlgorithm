import { alpha, TypeText } from "@mui/material";

const mainColor = "#161a21";

export const textLight: Partial<TypeText> = {
  primary: mainColor,
  secondary: alpha(mainColor, 0.7),
  disabled: alpha(mainColor, 0.5),
};
