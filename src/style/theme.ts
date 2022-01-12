// import { DefaultTheme } from 'styled-components';
// import { createTheme } from '@material-ui/core/styles';
// import { styled, createTheme, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fccf19',
      light: '#ffe98f',
      dark: '#d4af1c',
    },
    secondary: {
      main: '#84cbda',
      light: '#add8e6',
      dark: '#519ba6',
      contrastText: '#fff',
    },
  },
  maxWidth: '960px',
});

export default theme;
