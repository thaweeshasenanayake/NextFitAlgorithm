import { Components, Theme } from "@mui/material";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: (theme: Theme) => ({
    "*": {
      "&::-webkit-scrollbar": {
        height: "10px",
        width: "7px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.grey[100],
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[300],
        borderRadius: "50px",
      },
    },
  }),
};
