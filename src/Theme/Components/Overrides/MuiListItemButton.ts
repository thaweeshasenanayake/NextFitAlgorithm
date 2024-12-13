import { Components, Theme } from "@mui/material";

export const MuiListItemButton: Components<Theme>["MuiListItemButton"] = {
  defaultProps: {
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),

      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },

        "& .MuiListItemIcon-root": {
          color: theme.palette.primary.contrastText,
        },
      },
    }),
  },
};
