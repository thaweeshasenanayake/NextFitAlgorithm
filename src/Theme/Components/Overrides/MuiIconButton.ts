import { alpha, Components, Theme } from "@mui/material";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  defaultProps: {
    disableRipple: true,
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
      },
    }),
  },
};
