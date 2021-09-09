import React, { FC, ReactNode } from 'react';
import * as S from './PageFooter.styled';

export interface PageFooterProps {
  children: ReactNode;
}

export const PageFooter: FC<PageFooterProps> = ({ children }) => {
  return <S.Container>PageFooter{children}</S.Container>;
};

export default PageFooter;
