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
}

export const PageHeader: FC<PageHeaderProps> = ({ body, children, headline }) => {
  return (
    <S.Header className={cls('page-header-with-text')}>
      <Typography variant="h1">{headline}</Typography>
      {body ? <S.Body className="body1" dangerouslySetInnerHTML={{ __html: `${body}` }} /> : null}
      {/* {breadcrumbs ? } */}
    </S.Header>
  );
};
