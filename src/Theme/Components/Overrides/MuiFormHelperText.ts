import { Components, Theme } from "@mui/material";

export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.body1.fontSize,
      marginLeft: 0,
    }),
  },
};
