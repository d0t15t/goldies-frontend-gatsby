import React, { FC, ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Logo, Menu, NewsletterBlock } from '~components';
import * as S from './PageFooter.styled';

export interface PageFooterProps {
  children: ReactNode;
}

export const PageFooter: FC<PageFooterProps> = ({ children }) => {
  const {
    menuItems: { nodes },
  } = useStaticQuery(graphql`
    query {
      ...menuFooterMenuFragment
    }
  `);
  return (
    <S.Footer>
      <NewsletterBlock />
      <S.Lower>
        <div>
          <Menu items={nodes} />
        </div>
        <S.Identity>
          <Logo />
          <p>Goldie's Natural Beauty</p>
          <p>Copyright © {new Date().getFullYear()} </p>
        </S.Identity>
      </S.Lower>
    </S.Footer>
  );
};

export default PageFooter;
