import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import cls from 'classnames';
import { Box } from '@mui/material';
import { GlobalStyle } from '~src/style/GlobalStyle';
import { CTA, Drawer, Modal, Navigation, PageFooter } from '~components';
import { SEO } from '../SEO/SEO';
import * as S from './Layout.styled';

export const Layout: FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      <S.Layout className={cls(['layout-wrapper'])}>
        {/* <Navigation /> */}
        {/* <CTA /> */}
        {children}
        {/* <PageFooter /> */}
        <Modal />
      </S.Layout>
    </>
  );
};
