import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import { CloseButton, Menu } from '~components';
import * as U from '~utils';
import * as S from './LeftDrawer.styled';

export const LeftDrawer = () => {
  const { menuItems } = useStaticQuery(graphql`
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
      <SwipeableDrawer {...drawerProps}>
        <S.Inner>
          <CloseButton id={closeDrawerButtonId} handleClick={handleDrawerClose}>
            <InputLabel sx={visuallyHidden} htmlFor={closeDrawerButtonId}>
              Close menu
            </InputLabel>
          </CloseButton>
          <Box>
            <Menu items={U.getMenuItems(menuItems)} vertical={1} />
          </Box>
        </S.Inner>
      </SwipeableDrawer>
    </>
  );
};

export default LeftDrawer;
