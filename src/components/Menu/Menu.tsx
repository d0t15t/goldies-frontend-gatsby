import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
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
  const renderMenuTree = ( arr, depth = 0 ) => {
    
    return arr.length ? (
      <S.Menu vertical={vertical} className={cls('menu', 'menu--left-drawer')} menu-depth={depth}>
       {arr.map((item) => {
         const { handleClick, id, title, url } = item;
         const listItemText = <Typography as="span">{title}</Typography>;
         return (
           <li key={id} className={cls("menu-item", {'menu-item--with-children': item?.children.length})}>
             {url ? <Link to={url}>{listItemText}</Link> : listItemText}
             {item?.children.length ? renderMenuTree(item.children, depth++) : null }
           </li>
         );
        })} 
      </S.Menu>
    ) : null;
  } 
  return renderMenuTree(items);
};

export default Menu;
