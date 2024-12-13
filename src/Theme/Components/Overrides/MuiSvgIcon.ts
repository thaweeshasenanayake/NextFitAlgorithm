import { Components, Theme } from "@mui/material";

export const MuiSvgIcon: Components<Theme>["MuiSvgIcon"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(18),
    }),
  },
};
