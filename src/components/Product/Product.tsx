import React, { FC, ReactNode } from 'react';
import * as S from './Product.styled';

interface ProductProps {
  children: ReactNode;
}

export const Product: FC<ProductProps> = ({children}) => {
  return <S.Container>Product{children}</S.Container>;
};

export default Product;