import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      gold: string;
      light: string;
      primary: string;
      secondary: string;
    };
    sizes: string[];
    iconSizes: string[];
    margins: string[];
  }
}
