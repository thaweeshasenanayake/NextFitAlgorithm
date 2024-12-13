import { Components, Theme } from "@mui/material";

export const MuiListItemAvatar: Components<Theme>["MuiListItemAvatar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: "0px",
      paddingRight: theme.spacing(2),
    }),
  },
};
