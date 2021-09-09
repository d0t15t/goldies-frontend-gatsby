import React, { FC, ReactNode } from 'react';
import * as S from './MenuItem.styled';

import { Link } from '~components/Link/Link';

export interface MenuItemProps {
  id: string;
  url: string;
  children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ children, url }) => {
  return (
    <S.Container>
      <Link url={url}>{children}</Link>
    </S.Container>
  );
};

export default MenuItem;
