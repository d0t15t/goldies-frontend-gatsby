import React, { FC, ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, Logo, Menu, NewsletterBlock } from '~components';
import * as U from '~utils';
import * as S from './PageFooter.styled';

export interface PageFooterProps {
  children: ReactNode;
}

export const PageFooter: FC<PageFooterProps> = ({ children }) => {
  const { menuItems } = useStaticQuery(graphql`
    query {
      ...menuFooterMenuFragment
    }
  `);
  return (
    <S.Footer>
      <NewsletterBlock />
      <S.Lower>
        {/* <div> */}
        <Menu items={U.getMenuItems(menuItems)} />
        {/* </div> */}
        <p>☮</p>
        <S.Identity>
          <Link to="/">
            <Logo />
          </Link>
          <p>© Goldie's Natural Beauty {new Date().getFullYear()} </p>
        </S.Identity>
      </S.Lower>
    </S.Footer>
  );
};

export default PageFooter;
