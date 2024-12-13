import { TypographyOptions } from "@mui/material/styles/createTypography";
import { FONT_WEIGHTS } from "./Constants";

export const TYPOGRAPHY_OVERRIDES: TypographyOptions = {
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily: '"Open Sans", sans-serif',
  fontWeightLight: FONT_WEIGHTS.LIGHT,
  fontWeightRegular: FONT_WEIGHTS.REGULAR,
  fontWeightMedium: FONT_WEIGHTS.MEDIUM,
  fontWeightSemiBold: FONT_WEIGHTS.SEMI_BOLD,
  fontWeightBold: FONT_WEIGHTS.BOLD,

  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.8rem",
    fontWeight: 400,
  },
  button: {
    fontWeight: FONT_WEIGHTS.REGULAR,
    textTransform: "none",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  overline: {
    fontSize: "0.75rem",
    textTransform: "none",
  },
};
