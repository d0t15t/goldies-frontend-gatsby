import React, { FC, Fragment, ReactNode } from 'react';
import { Logo } from '~components/index';
import * as S from './PageHeader.styled';

export interface PageHeaderProps {
  body: string | null;
  children: ReactNode | null;
  title: string | null;
  display: boolean;
}

export const PageHeader: FC<PageHeaderProps> = ({ body, children, title }) => {
  return (
    <>
      <Logo />
      <S.Container dangerouslySetInnerHTML={{ __html: `${title}${body}` }} />
      {children}
    </>
  );
};

export default PageHeader;
