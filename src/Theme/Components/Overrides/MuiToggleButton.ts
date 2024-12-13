import { Components, Theme } from "@mui/material";

export const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[500],
      transition: "all .2s",
      border: "none",

      "&:hover, &.Mui-selected, &.Mui-selected:hover": {
        color: theme.palette.primary.main,
        background: "none",
      },
    }),
  },
};
