import React, { FC, ReactNode } from 'react';
import * as S from './Breadcrumbs.styled';

interface BreadcrumbsProps {
  children: ReactNode;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({children}) => {
  return <S.Breadcrumbs>Breadcrumbs{children}</S.Breadcrumbs>;
};

export default Breadcrumbs;