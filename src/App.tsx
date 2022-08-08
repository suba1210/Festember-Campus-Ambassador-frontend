import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { Routers } from './routes';
import { customTheme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}
