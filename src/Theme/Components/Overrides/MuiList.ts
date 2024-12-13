import { Components, Theme } from "@mui/material";

export const MuiList: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0),
    }),
  },
};
