import React, { FunctionComponent } from 'react';
import * as S from './PageTitle.styled';

interface PageTitleProps {
  children?: React.ReactNode;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ children }) => {
  return (
    <S.Container>
      <S.H1>{children}</S.H1>
    </S.Container>
  );
};

export default PageTitle;
