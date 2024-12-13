import { Components, Theme } from "@mui/material";

export const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  defaultProps: {
    disableRipple: true,
    focusVisibleClassName: ".Mui-focusVisible",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: 36,
      height: 20,
      padding: 0,
      marginRight: theme.spacing(1),
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 3,
        transitionDuration: "100ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled": {
            color: "#fff",
          },
        },
        "&.Mui-disabled": {
          color: "#fff",
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: "#33cf4d",
          border: "6px solid #fff",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 1,
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 14,
        height: 14,
      },
      "& .MuiSwitch-track": {
        borderRadius: 20 / 2,
        backgroundColor: theme.palette.grey[300],
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 500,
        }),
      },
    }),
  },
};
