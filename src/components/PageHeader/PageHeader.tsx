import React, { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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
    <S.Header>
      <Link to="/">
        <Logo />
      </Link>

      <S.Headline dangerouslySetInnerHTML={{ __html: `${headline}` }} />
      {body ? <S.Body className={'body1'} dangerouslySetInnerHTML={{ __html: `${body}` }} /> : null}
      {children}
    </S.Header>
  );
};
