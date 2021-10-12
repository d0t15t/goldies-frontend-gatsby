import React, { FC, ReactNode } from 'react';
import { useCartItems } from 'gatsby-theme-shopify-manager';
import { CartItem } from '~components/';
import * as S from './Cart.styled';

interface CartProps {
  children: ReactNode;
}

export const Cart: FC<CartProps> = ({ children }) => {
  const cartItems = useCartItems();

  return (
    <S.Container>
      {cartItems.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </S.Container>
  );
};

export default Cart;
