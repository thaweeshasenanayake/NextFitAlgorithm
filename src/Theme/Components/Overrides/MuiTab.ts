import { Components, Theme } from "@mui/material";

export const MuiTab: Components<Theme>["MuiTab"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 0,
      fontWeight: 600,
    },
  },
};
