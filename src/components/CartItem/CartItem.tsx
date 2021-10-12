import React, { FC, ReactNode } from 'react';
import * as S from './CartItem.styled';

interface CartItemProps {
  children: ReactNode;
}

export const CartItem: FC<CartItemProps> = (props) => {
  const { quantity, title, variant } = props;
  const { image, price, sku } = variant;
  console.log('🚀 ~ file: CartItem.tsx ~ line 12 ~ image', image);
  return (
    <S.Container>
      <S.Row>
        <S.Title>
          {quantity} x {title}
        </S.Title>
        {/* This image loads from external CDN, would be a good candidate to lazy load */}
        <S.Image src={image.src} alt={title} />
      </S.Row>
    </S.Container>
  );
};

export default CartItem;
