import { Components, Theme } from "@mui/material";

export const MuiListSubheader: Components<Theme>["MuiListSubheader"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    }),
  },
};
