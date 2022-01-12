import 'styled-components';
import { Theme } from '@mui/material/styles';

interface CustomTheme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
  };
  maxWidth: string;
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: {
//       dark: string;
//       gold: string;
//       light: string;
//       primary: string;
//       secondary: string;
//     };
//     sizes: string[];
//     iconSizes: string[];
//     margins: string[];
//   }
// }
