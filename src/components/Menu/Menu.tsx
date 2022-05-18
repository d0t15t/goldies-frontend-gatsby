import React, { FC, ReactNode } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { Link } from '~components';
import * as S from './Menu.styled';

interface MenuProps {
  items: Array;
  vertical: number;
}

export const Menu: FC<MenuProps> = ({ items, vertical }) => {
  return (
    <S.Menu vertical={vertical} className="menu">
      {items.map((item) => {
        const { handleClick, id, title, url } = item;
        const listItemText = <ListItemText>{title}</ListItemText>;
        return (
          <ListItem key={id} className="menu-item">
            {url ? <Link to={url}>{listItemText}</Link> : listItemText}
          </ListItem>
        );
      })}
    </S.Menu>
  );
};

export default Menu;
