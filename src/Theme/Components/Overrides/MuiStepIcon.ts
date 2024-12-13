import { Components, Theme } from "@mui/material";

export const MuiStepIcon: Components<Theme>["MuiStepIcon"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(20),
    }),
  },
};
