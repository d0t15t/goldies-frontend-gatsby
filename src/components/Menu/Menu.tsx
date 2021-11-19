import React, { FC, ReactNode } from 'react';
import { Box, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from '~components';
import * as S from './Menu.styled';

interface MenuProps {
  items: Array;
  vertical: boolean;
}

export const Menu: FC<MenuProps> = ({ items, vertical }) => {
  return (
    <S.Menu vertical={vertical}>
      {items.map((item) => {
        const { handleClick, id, title, link } = item;
        return (
          link && (
            <ListItem key={id}>
              <Link to={link}>
                <ListItemText>{title}</ListItemText>
              </Link>
            </ListItem>
          )
        );
      })}
    </S.Menu>
  );
};

export default Menu;
