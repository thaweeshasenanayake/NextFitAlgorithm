import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#57CA22";

export const successLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.3),
  dark: darken(mainColor, 0.2),
  contrastText: "#FFF",
};
