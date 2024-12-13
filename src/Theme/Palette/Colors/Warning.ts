import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#FFA319";

export const warningLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.3),
  dark: darken(mainColor, 0.2),
  contrastText: "#FFF",
};
