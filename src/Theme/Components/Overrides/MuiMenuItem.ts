import { Components, Theme } from "@mui/material";

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      minHeight: "0px",

      "& .MuiListItemIcon-root": {
        minWidth: "0px",
        paddingRight: theme.spacing(2),
      },
    }),
  },
};
