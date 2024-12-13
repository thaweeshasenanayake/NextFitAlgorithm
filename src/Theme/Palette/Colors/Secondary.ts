import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#3A93D0";

export const secondaryLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.35),
  dark: darken(mainColor, 0.2),
  contrastText: "#000",
};
