import React, { FC, ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import { Box, Typography } from '@mui/material';
import { Link, Logo, Menu, NewsletterBlock, SocialBlock } from '~components';
import * as U from '~utils';
import * as S from './PageFooter.styled';

export interface PageFooterProps {
  children: ReactNode;
}

export const PageFooter: FC<PageFooterProps> = ({ children }) => {
  const { footerMenuItems, footerContactMenuItems } = useStaticQuery(graphql`
    query {
      ...menuFooterMenuFragment
      ...menuFooterContactMenuFragment
    }
  `);
  return (
    <S.Footer as="footer">
      <S.Inner>
        <NewsletterBlock />
        {/* <S.Lower> */}
        {/* <div> */}
        <Box className={cls('menu-block')}>
          <Typography variant="h6">Goldies</Typography>
          <Menu items={U.getMenuItems(footerMenuItems)} vertical={1} />
        </Box>
        <Box className={cls('menu-block')}>
          <Typography variant="h6">Info</Typography>
          <Menu items={U.getMenuItems(footerContactMenuItems)} vertical={1} />
        </Box>
        {/* </div> */}
        <Box className="social-block">
          <SocialBlock />
        </Box>
        <S.Identity className="identity">
          <p className="peace">☮</p>
          <Link to="/">
            <Logo />
          </Link>
          <p>© Goldies Natural Beauty {new Date().getFullYear()} </p>
        </S.Identity>
        {/* </S.Lower> */}
      </S.Inner>
    </S.Footer>
  );
};

export default PageFooter;
