import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { GlobalStyle } from '~src/style/GlobalStyle';
import { Box } from '@mui/material';
import { Drawer, Modal, Navigation } from '~components';
import { SEO } from '../SEO/SEO';
import * as S from './Layout.styled';

export const Layout: FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      <S.Layout>
        <Navigation />
        {children}
        <Modal />
      </S.Layout>
    </>
  );
};
