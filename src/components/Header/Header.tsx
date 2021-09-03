import React, { FunctionComponent } from 'react';
import { Logo, PageTitle } from '~components/index';
import * as S from './Header.styled';

interface HeaderProps {
  pageTitle: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ pageTitle }: HeaderProps) => {
  return (
    <S.Container>
      <PageTitle>{pageTitle}</PageTitle>
      <Logo />
    </S.Container>
  );
};

export default Header;
