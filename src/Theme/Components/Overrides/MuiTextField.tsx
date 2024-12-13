import { Components, Theme } from "@mui/material";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    size: "small",
    variant: "outlined",
    fullWidth: true,
  },
};
