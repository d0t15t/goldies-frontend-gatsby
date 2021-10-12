import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { GlobalStyle } from '../../style/GlobalStyle';
import { Modal, Navigation } from '~components';
import { SEO } from '../SEO/SEO';

export const Layout: FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      {children}
      <Navigation />
      <Modal />
    </>
  );
};
