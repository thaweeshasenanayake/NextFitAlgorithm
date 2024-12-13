import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#FF6A73";

export const errorLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.3),
  dark: darken(mainColor, 0.2),
  contrastText: "#FFF",
};
