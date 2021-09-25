import React, { FC, ReactNode } from 'react';
import * as S from './AddToCartButton.styled';

interface AddToCartButtonProps {
  children: ReactNode;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({children}) => {
  return <S.Container>AddToCartButton{children}</S.Container>;
};

export default AddToCartButton;