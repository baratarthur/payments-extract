import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useState, useMemo, ReactNode } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
    children: ReactNode
}

export default function ColorModeProvider({children}: Props) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
