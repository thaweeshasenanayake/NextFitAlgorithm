import { Components, Theme } from "@mui/material";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
      },
    },
  },
};
