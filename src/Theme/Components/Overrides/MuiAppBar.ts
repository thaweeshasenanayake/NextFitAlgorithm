import { Components, Theme } from "@mui/material";

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      position: "fixed",
      color: theme.palette.secondary.contrastText,
    }),
  },
};
