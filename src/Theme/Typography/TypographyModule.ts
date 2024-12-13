declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}
