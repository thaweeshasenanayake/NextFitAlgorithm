import { Components, Theme } from "@mui/material";

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    asterisk: ({ theme }) => ({
      color: theme.palette.error.main,
    }),
  },
};
