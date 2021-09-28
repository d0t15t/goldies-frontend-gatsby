import React, { FC } from 'react';
import { AddToCart, FancyImageBox, Image, Link, Modal } from '~components/index';
import * as S from './Product.styled';

interface ProductProps {
  headline: string;
  body: string;
}

export const Product: FC<ProductProps> = ({ headline, body, images, variants }) => {
  // console.log('🚀 ~ file: Product.tsx ~ line 11 ~ images', images);
  return (
    <S.Container>
      <S.Headline>{headline}</S.Headline>
      {body && <S.Body>{body}</S.Body>}
      <AddToCart variantId="1" quantity={1}>
        Add to Cart
      </AddToCart>
      <FancyImageBox {...images} />
      <Modal />
    </S.Container>
  );
};

export default Product;
