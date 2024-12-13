/**
 * This module is used to declare a new variants, props for the components.
 */

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    iconOnlyOutlined: true;
    denseUnderlined: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    poppup: true;
    filter: true;
  }
}
