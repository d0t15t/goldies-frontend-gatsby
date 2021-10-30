import React, { useRef, useState } from 'react';
import { useCartCount } from 'gatsby-theme-shopify-manager';
import { useDimensions } from 'react-hook-dimensions';
import useEventListener from '@use-it/event-listener';
import { BiCart } from 'react-icons/bi';
import { IoBagOutline } from 'react-icons/io5';
import { Button, Cart, Link, Portal } from '~components';
import * as U from '~utils';
import * as S from './CartButton.styled';

export const CartButton = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartCount = useCartCount();
  const [dropdownTriggerRef, dropdownTriggerStyles, dropdownTriggerCalculate] = useDimensions({
    dependencies: [],
  });
  const buttonId = 'cart-button';
  const dropdownRef = useRef();
  useEventListener('click', (e) => {
    if (U.isCartButtonClick(e, buttonId, dropdownRef)) {
      return;
    }
    setCartIsOpen(false);
  });

  useEventListener('resize', (e) => dropdownTriggerCalculate());
  const handleClick = () => setCartIsOpen(!cartIsOpen);

  return cartCount ? (
    <S.Container>
      <Button onClick={handleClick} id="cart-button">
        <IoBagOutline />
        <S.Count>{cartCount > 9 ? '9+' : cartCount}</S.Count>
      </Button>
      {cartIsOpen && (
        <Portal>
          <S.Cart ref={dropdownRef}>
            <p>Your Bag</p>
            <Cart context="menu" />
            <Link url="/cart" handleClick={() => setCartIsOpen(false)}>
              Go to bag
            </Link>
          </S.Cart>
        </Portal>
      )}
    </S.Container>
  ) : null;
};

export default CartButton;
