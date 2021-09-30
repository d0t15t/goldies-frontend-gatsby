import React, { FC, ReactNode } from 'react';
import * as S from './ShoppingCartItem.styled';

interface ShoppingCartItemProps {
  children: ReactNode;
}

export const ShoppingCartItem: FC<ShoppingCartItemProps> = ({children}) => {
  return <S.Container>ShoppingCartItem{children}</S.Container>;
};

export default ShoppingCartItem;