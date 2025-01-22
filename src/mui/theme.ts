"use client";
import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   cssVariables: true,
//   typography: {
//     fontFamily: "var(--font-roboto)",
//   }, 
// });

// #07cff6,#194162,#0d2534,#04131e,#020204 

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  }, 
  palette: {
    mode: 'dark',
    primary: {
      main: '#07cff6', // Your preferred shade of blue
    },
    background: {
      default: '#020204', // Charcoal background
      paper: '#04131e', // Slightly lighter charcoal for paper elements
    },
  },
});


export const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
