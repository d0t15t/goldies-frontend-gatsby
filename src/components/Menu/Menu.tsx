import React, { FC, ReactNode } from 'react';
import { Link } from '~components';
import * as S from './Menu.styled';

interface MenuProps {
  items: Array;
  vertical: boolean;
}

export const Menu: FC<MenuProps> = ({ items, vertical }) => {
  return (
    <S.Menu
      // theme={({ theme }) => {
      //   console.log(theme);
      // }}
      orientation={'vertical'}
    >
      {items.map((item) => {
        return (
          <S.MenuItem key={item.id}>
            <Link url={item.link.alias}>{item.title}</Link>{' '}
          </S.MenuItem>
        );
      })}
    </S.Menu>
  );
};

export default Menu;
