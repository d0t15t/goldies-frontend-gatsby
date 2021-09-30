import React, { FC, Fragment, ReactNode } from 'react';

import { Link, Logo } from '~components/index';
import * as S from './PageHeader.styled';

export interface PageHeaderProps {
  body: string | null;
  children: ReactNode | null;
  display: boolean;
  headline: string | null;
}

export const PageHeader: FC<PageHeaderProps> = ({ body, children, headline }) => {
  return (
    <>
      <Link url="/">
        <Logo />
      </Link>
      <S.Headline dangerouslySetInnerHTML={{ __html: `${headline}` }} />
      {body ? <S.Container dangerouslySetInnerHTML={{ __html: `${body}` }} /> : null}
      {children}
    </>
  );
};

// export default PageHeader;
