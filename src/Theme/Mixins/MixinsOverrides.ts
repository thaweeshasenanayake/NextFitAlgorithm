import { MixinsOptions } from "@mui/material/styles/createMixins";

export const MIXIN_OVERRIDES: MixinsOptions = {
  toolbar: {
    minHeight: 48,
    paddingLeft: 24,
    "@media (min-width:0px) and (orientation: landscape)": {
      minHeight: 48,
      paddingLeft: 24,
    },
    "@media (min-width:660px)": {
      minHeight: 48,
      paddingLeft: 24,
    },
  },
};
