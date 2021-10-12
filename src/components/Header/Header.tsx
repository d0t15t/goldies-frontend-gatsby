import React, { FunctionComponent } from 'react';
import { IconButton, Logo, PageTitle, Portal } from '~components';
import * as S from './Header.styled';

interface HeaderProps {
  pageTitle: string | undefined;
}

export const Header: FunctionComponent<HeaderProps> = ({ pageTitle }: HeaderProps) => {
  return null;
  return (
    <S.Container>
      <Logo />
      {pageTitle ? <PageTitle>{pageTitle}</PageTitle> : null}
      foo
      <Portal>
        <S.Buttons>
          <IconButton iconName="cart" />
        </S.Buttons>
      </Portal>
    </S.Container>
  );
};

export default Header;
