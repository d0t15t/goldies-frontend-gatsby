import React, { FunctionComponent } from 'react';
import { MenuItem, MenuItemProps } from '~components/MenuItem/MenuItem';

import * as S from './MenuMain.styled';

interface MenuMainProps {
  items: MenuItemProps[];
}

export const MenuMain: FunctionComponent<MenuMainProps> = ({ items }) => {
  return (
    <S.Container>
      {items.map((item) => (
        <MenuItem {...item} key={item.id}>
          {item.children}
        </MenuItem>
      ))}
    </S.Container>
  );
};

export default MenuMain;
