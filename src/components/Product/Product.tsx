import React, { FC } from 'react';
import { Image, Link, Modal } from '~components/index';
import * as S from './Product.styled';

interface ProductProps {
  headline: string;
  body: string;
}

export const Product: FC<ProductProps> = ({ headline, body, images, variants }) => {
  return (
    <S.Container>
      <S.Headline>{headline}</S.Headline>
      {body && <S.Body>{body}</S.Body>}
      <Modal />
      {/* {image && <Image data={image} alt={headline || ''} />} */}
    </S.Container>
  );
};

export default Product;
