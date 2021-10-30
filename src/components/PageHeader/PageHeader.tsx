import React, { FC, ReactNode } from 'react';
import { Link, Logo } from '~components';
import * as S from './PageHeader.styled';

export interface PageHeaderProps {
  body: string | null;
  children: ReactNode | null;
  display: boolean;
  headline: string | null;
}

export const PageHeader: FC<PageHeaderProps> = ({ body, children, headline }) => {
  return (
    <S.Container>
      <Link url="/">
        <Logo />
      </Link>
      <S.Headline dangerouslySetInnerHTML={{ __html: `${headline}` }} />
      {body ? <S.Body dangerouslySetInnerHTML={{ __html: `${body}` }} /> : null}
      {children}
    </S.Container>
  );
};
