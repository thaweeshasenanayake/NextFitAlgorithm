import { Components, Theme } from "@mui/material";

export const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: 42,
      height: 42,
    }),
    head: ({ theme }) => ({
      background: theme.palette.grey[100],
      fontWeight: theme.typography.fontWeightSemiBold,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
};
