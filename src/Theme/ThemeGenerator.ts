import { createTheme, Theme } from "@mui/material";
import { DARK_PALETTE_OPTIONS, LIGHT_PALETTE_OPTIONS } from "./Palette";
import { COMPONENT_OVERRIDES } from "./Components";
import { SHADOWS_OVERRIDES } from "./Shadows";
import { TYPOGRAPHY_OVERRIDES } from "./Typography";
import { BREAKPOINTS_OVERRIDES } from "./Breakpoints";
import { MIXIN_OVERRIDES } from "./Mixins";
import { THEME_MODES } from "../Common/Constants";

export const themeGenerator = (mode: THEME_MODES): Theme => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === THEME_MODES.LIGHT
        ? LIGHT_PALETTE_OPTIONS
        : DARK_PALETTE_OPTIONS),
    },
    components: COMPONENT_OVERRIDES,
    shadows: SHADOWS_OVERRIDES,
    typography: TYPOGRAPHY_OVERRIDES,
    spacing: 8,
    shape: {
      borderRadius: 0,
    },
    breakpoints: BREAKPOINTS_OVERRIDES,
    mixins: MIXIN_OVERRIDES,
  });
  return theme;
};
