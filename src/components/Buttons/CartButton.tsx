import React, { FC, ReactNode } from 'react';
import { useCartCount } from 'gatsby-theme-shopify-manager';
import { IconButton, Modal } from '~components';
import * as S from './CartButton.styled';

interface CartButtonProps {
  buttonStyles: string;
  handleClick: Function;
  iconStyles: Object;
}

export const CartButton: FC<CartButtonProps> = ({ buttonStyles, iconStyles, handleClick }) => {
  const cartCount = useCartCount();
  return cartCount ? (
    <>
      <IconButton
        buttonStyles={buttonStyles}
        handleClick={handleClick}
        iconName="cart"
        iconStyles={iconStyles}
      />
      <S.Count>{cartCount}</S.Count>
    </>
  ) : null;
};

export default CartButton;
