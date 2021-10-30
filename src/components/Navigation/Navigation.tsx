import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
// import { Portal } from 'react-portal';
import { Context } from '~context';
import { useDispatch } from '~hooks';
import { Cart, CartButton, IconButton, Modal, Portal, SearchBar } from '~components';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const [{ modalIsOpen, modalContent }, dispatch] = useContext(Context);

  const cartButtonClick = () => {
    useDispatch('modalIsOpen', true, dispatch);
    useDispatch('modalContent', <Cart />, dispatch);
  };

  // const iconStyles = { color: 'white', size: '1.5em' };

  return (
    <>
      <Portal target="navigation-portal" status>
        <S.Container id="navigation">
          <S.Unit>
            <IconButton iconName="hamburger" />
            <SearchBar />
          </S.Unit>
          <S.Unit>
            <CartButton handleClick={cartButtonClick} />
          </S.Unit>
        </S.Container>
      </Portal>
    </>
  );
};

export default Navigation;
