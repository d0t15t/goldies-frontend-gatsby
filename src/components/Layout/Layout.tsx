import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { GlobalStyle } from '../../style/GlobalStyle';
import { Drawer, Modal, Navigation } from '~components';
import { SEO } from '../SEO/SEO';

export const Layout: FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      {children}
      <Navigation />
      <Modal />
      {/* <div id="navigation-portal" />
      <div id="search-bar__results-portal" />
      <div id="product-variants-select-portal" />
      <div id="modal-portal" /> */}
    </>
  );
};
