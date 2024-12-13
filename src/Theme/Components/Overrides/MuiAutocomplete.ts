import { Components, Theme } from "@mui/material";

export const MuiAutocomplete: Components<Theme>["MuiAutocomplete"] = {
  defaultProps: {
    slotProps: {
      listbox: {
        sx: {
          padding: 0,
        },
      },
    },
  },

  styleOverrides: {
    noOptions: {
      padding: "6px 16px",
    },
    loading: {
      padding: "6px 16px",
    },
  },
};
