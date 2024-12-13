import { Components, Theme } from "@mui/material";

export const MuiPopover: Components<Theme>["MuiPopover"] = {
  defaultProps: {
    slotProps: {
      paper: {
        variant: "poppup",
      },
    },
  },
};
