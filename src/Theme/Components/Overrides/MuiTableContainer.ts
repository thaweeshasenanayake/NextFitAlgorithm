import { Components, Theme } from "@mui/material";

export const MuiTableContainer: Components<Theme>["MuiTableContainer"] = {
  styleOverrides: {
    root: {
      marginTop: 0,
      overflow: "auto",
    },
  },
};
