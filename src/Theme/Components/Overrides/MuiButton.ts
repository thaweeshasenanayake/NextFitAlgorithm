import { alpha, Components, Theme } from "@mui/material";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    variant: "contained",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(0),
      fontSize: theme.typography.fontSize,
    }),

    iconSizeMedium: ({ theme }) => ({
      "& > *:first-of-type": {
        fontSize: theme.typography.pxToRem(16),
      },
    }),
  },
  variants: [
    {
      props: (props) => props.variant === "iconOnlyOutlined",
      style: ({ theme }) => ({
        textTransform: "none",
        color: theme.palette.primary.main,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
        "& .MuiButton-startIcon": {
          margin: 0,
        },
      }),
    },
    {
      props: (props) => props.variant === "denseUnderlined",
      style: ({ theme }) => ({
        textTransform: "none",
        color: theme.palette.grey[600],
        padding: "0px",
        ":hover": {
          background: "none",
          textDecoration: "underline",
        },
      }),
    },
  ],
};
