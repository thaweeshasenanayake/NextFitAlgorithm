import { darken, lighten, PaletteColorOptions } from "@mui/material";

const mainColor = "#33C2FF";

export const infoLight: PaletteColorOptions = {
  main: mainColor,
  light: lighten(mainColor, 0.3),
  dark: darken(mainColor, 0.2),
  contrastText: "#FFF",
};
