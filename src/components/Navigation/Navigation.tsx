import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { Portal } from 'react-portal';
import { Context } from '~context';
import { useDispatch } from '~hooks';
// import { Toolbar } from '@mui/material';
import {
  Cart,
  CartButton,
  LeftDrawer,
  DrawerButton,
  DrawerContent,
  IconButton,
  Modal,
  Portal,
  SearchBar,
} from '~components';
import * as S from './Navigation.styled';

export const Navigation = () => {
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const cartButtonClick = (e) => {
    // useDispatch('modalIsOpen', true, dispatch);
    // useDispatch('modalContent', <Cart />, dispatch);
  };

  return (
    <>
      {/* <Portal target="navigation-portal" status> */}
      <S.Navigation id="navigation">
        <S.Inner>
          <S.Unit>
            <LeftDrawer />
            <SearchBar />
          </S.Unit>
          <S.Unit>
            <CartButton handleClick={cartButtonClick} />
          </S.Unit>
        </S.Inner>
      </S.Navigation>
      {/* </Portal> */}
    </>
  );
};

export default Navigation;
