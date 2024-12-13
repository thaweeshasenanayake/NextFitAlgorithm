import { Components, Theme } from "@mui/material";

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    flexContainer: ({ theme }) => ({
      gap: theme.spacing(3),
    }),
  },
};
