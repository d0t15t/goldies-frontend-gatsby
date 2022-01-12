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
        const { handleClick, id, title, link } = item;
        return link ? (
          <ListItem key={id} className="menu-item">
            <Link to={link}>
              <ListItemText>{title}</ListItemText>
            </Link>
          </ListItem>
        ) : (
          <ListItem key={id} className="menu-item">
            <ListItemText>{title}</ListItemText>
          </ListItem>
        );
      })}
    </S.Menu>
  );
};

export default Menu;
