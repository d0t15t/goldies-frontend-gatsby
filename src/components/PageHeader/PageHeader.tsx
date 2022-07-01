import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, Logo } from '~components';
import * as S from './PageHeader.styled';
import * as U from '~utils';

export interface PageHeaderProps {
  body: string | null;
  children: ReactNode | null;
  display: boolean;
  headline: string | null;
  hasShiftedHeadline: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ body, children, headline, hasShiftedHeadline }) => {
  return (
    <S.Header className={cls('page-header', {'page-header--shifted': hasShiftedHeadline})}>
      <Typography variant="h1" className={cls(['page-headline'])}>{headline}</Typography>
      {body ? <S.Body className="body1" dangerouslySetInnerHTML={{ __html: `${body}` }} /> : null}
      {/* {breadcrumbs ? } */}
    </S.Header>
  );
};
