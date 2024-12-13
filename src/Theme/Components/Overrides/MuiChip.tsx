import { ClearRounded } from "@mui/icons-material";
import { Components, Theme } from "@mui/material";

export const MuiChip: Components<Theme>["MuiChip"] = {
  defaultProps: {
    deleteIcon: <ClearRounded />,
    variant: "outlined",
  },
  styleOverrides: {
    deleteIcon: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(18),
    }),
  },
};
