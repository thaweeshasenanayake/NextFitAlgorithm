import { Components, Theme } from "@mui/material";

export const MuiListItemIcon: Components<Theme>["MuiListItemIcon"] = {
  styleOverrides: {
    root: () => ({
      minWidth: "24px",
    }),
  },
};
