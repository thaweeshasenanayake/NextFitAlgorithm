import { Components, Theme } from "@mui/material";

export const MuiDialogContent: Components<Theme>["MuiDialogContent"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(2),
    }),
  },
};
