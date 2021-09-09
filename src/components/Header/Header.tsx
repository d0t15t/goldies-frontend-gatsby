import React, { FunctionComponent } from 'react';
import { Logo, PageTitle } from '~components/index';
import * as S from './Header.styled';

interface HeaderProps {
  pageTitle: string | undefined;
}

export const Header: FunctionComponent<HeaderProps> = ({ pageTitle }: HeaderProps) => {
  return (
    <S.Container>
      <Logo />
      {pageTitle ? <PageTitle>{pageTitle}</PageTitle> : null}
    </S.Container>
  );
};

export default Header;
