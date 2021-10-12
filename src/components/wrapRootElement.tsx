import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '~context/modalProvider';
import { theme } from '../style/theme';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ModalProvider>{element}</ModalProvider>
  </ThemeProvider>
);
