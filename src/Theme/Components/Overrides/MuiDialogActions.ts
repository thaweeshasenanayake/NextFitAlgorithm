import { Components, Theme } from "@mui/material";

export const MuiDialogActions: Components<Theme>["MuiDialogActions"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.divider}`,
    }),
  },
};
