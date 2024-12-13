import React, { useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeGenerator } from "./ThemeGenerator";
import { THEME_MODES } from "../Common/Constants";

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = React.createContext({ toggleColorMode: () => {} });

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [mode, setMode] = React.useState<THEME_MODES>(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? (savedMode as THEME_MODES) : THEME_MODES.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => themeGenerator(mode), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
