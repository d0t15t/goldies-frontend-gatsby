import React, { useContext, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import cls from 'classnames';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  InputLabel,
  SwipeableDrawer,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import { Context, useDispatch } from '~context';
import { CloseButton, Menu, SearchBar } from '~components';
import * as U from '~utils';
import * as S from './LeftDrawer.styled';

export const LeftDrawer = () => {
  const [context, dispatch] = useContext(Context);

  const { sidebarMenuItems: menuItems } = useStaticQuery(graphql`
    query {
      ...menuSidebarMenuFragment
    }
  `);
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => setIsOpen(true);
  const handleDrawerClose = () => setIsOpen(false);

  const drawerProps = {
    variant: 'temporary',
    open: isOpen,
    onClose: handleDrawerClose,
    onOpen: handleDrawerOpen,
  };

  const theme = useTheme();
  const mqMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const openDrawerButtonId = 'open-drawer-menu-button';
  const closeDrawerButtonId = 'close-drawer-menu-button';
  return (
    <>
      <IconButton id={openDrawerButtonId} onClick={handleDrawerOpen}>
        <InputLabel sx={visuallyHidden} htmlFor={openDrawerButtonId}>
          Open menu
        </InputLabel>
        <MenuIcon />
      </IconButton>
      <S.Drawer {...drawerProps} className={cls('left-drawer')}>
        <S.Inner>
          {/* <CloseButton id={closeDrawerButtonId} handleClick={handleDrawerClose}>
            <InputLabel sx={visuallyHidden} htmlFor={closeDrawerButtonId}>
              Close menu
            </InputLabel>
          </CloseButton> */}
          <Box>
            <SearchBar />
            <Menu items={U.getMenuItems(menuItems)} vertical={1} />
          </Box>
        </S.Inner>
      </S.Drawer>
    </>
  );
};

export default LeftDrawer;
