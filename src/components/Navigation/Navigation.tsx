import React, { useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import cls from 'classnames';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Context, useDispatch } from '~context';

import { Link, Logo, CartButton, LeftDrawer, Portal, SearchBar } from '~components';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const [context, dispatch] = useContext(Context);
  const ref = useRef();
  const theme = useTheme();
  const mqSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const logo = (
    <Link to="/">
      <Logo />
    </Link>
  );

  return (
    <>
      <S.AppBarStyled id="navigation">
        <S.Inner>
          <S.Unit>
            {/* <Portal> */}
            <LeftDrawer />
            {/* </Portal> */}
            {mqSmUp && <SearchBar parentRef={ref} classes={cls('search-bar__nav')} />}
          </S.Unit>
          {!mqSmUp && logo}
          <S.Unit>
            <CartButton />
            {mqSmUp && logo}
          </S.Unit>
        </S.Inner>
      </S.AppBarStyled>
    </>
  );
};

export default Navigation;
