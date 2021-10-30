import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from '~context/contextProvider';
import { theme } from '../style/theme';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ContextProvider>{element}</ContextProvider>
  </ThemeProvider>
);
