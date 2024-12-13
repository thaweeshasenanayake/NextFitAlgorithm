import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#09344f";

export const primaryLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.3),
  dark: darken(mainColor, 0.2),
  contrastText: "#FFF",
};

export const primaryDark: PaletteColorOptions = {
  main: "#004ba0",
  light: "#63a4ff",
  dark: "#004ba0",
  contrastText: "#fff",
};
