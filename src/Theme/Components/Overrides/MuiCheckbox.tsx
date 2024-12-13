import { Components, Theme } from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import IndeterminateCheckBoxSharpIcon from "@mui/icons-material/IndeterminateCheckBoxSharp";

export const MuiCheckbox: Components<Theme>["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: true,
    icon: <CheckBoxOutlineBlankSharpIcon />,
    checkedIcon: <CheckBoxSharpIcon />,
    indeterminateIcon: <IndeterminateCheckBoxSharpIcon />,
  },
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};
