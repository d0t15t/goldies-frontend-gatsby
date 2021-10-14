import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
// import { Portal } from 'react-portal';
import { ModalContext } from '~context';
import { useDispatch } from '~hooks';
import { Cart, CartButton, IconButton, Modal, Portal, SearchBar } from '~components';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const [{ modalIsOpen, modalNodes }, dispatch] = useContext(ModalContext);

  const cartButtonClick = () => {
    useDispatch('modalIsOpen', true, dispatch);
    useDispatch('modalNodes', <Cart />, dispatch);
  };

  const iconStyles = { color: 'white', size: '1.5em' };

  return (
    <>
      <div id="navigation-portal" />
      <Portal target="navigation-portal" status>
        <S.Container id="navigation">
          <S.Unit>
            <IconButton iconStyles={iconStyles} iconName="hamburger" />
            <SearchBar />
          </S.Unit>
          <S.Unit>
            <CartButton iconStyles={iconStyles} handleClick={cartButtonClick} />
          </S.Unit>
        </S.Container>
      </Portal>
    </>
  );
};

export default Navigation;
