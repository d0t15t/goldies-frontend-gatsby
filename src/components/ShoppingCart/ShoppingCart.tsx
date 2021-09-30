import React, { FC, ReactNode } from 'react';
import * as S from './ShoppingCart.styled';

interface ShoppingCartProps {
  children: ReactNode;
}

export const ShoppingCart: FC<ShoppingCartProps> = ({children}) => {
  return <S.Container>ShoppingCart{children}</S.Container>;
};

export default ShoppingCart;