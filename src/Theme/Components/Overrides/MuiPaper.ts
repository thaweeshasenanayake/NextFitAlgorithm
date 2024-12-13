import { Components, Theme } from "@mui/material";
import { CUSTOM_ELEVATIONS } from "../../Shadows/CustomElevations";

export const MuiPaper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(0),
      fontSize: theme.typography.fontSize,
    }),
  },
  variants: [
    {
      props: { variant: "poppup" },
      style: ({ theme }) => ({
        boxShadow: CUSTOM_ELEVATIONS.default,
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
      }),
    },
    {
      props: { variant: "filter" },
      style: ({ theme }) => ({
        background: "none",
        padding: theme.spacing(2),
        paddingTop: theme.spacing(7),
      }),
    },
  ],
};
