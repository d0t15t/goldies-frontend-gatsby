import React, { FC, useState } from 'react';
import { AddToCart, Counter, FancyImageBox, Link } from '~components/index';

/** @var PU ProductUtils */
import * as PU from '~src/utils/index';
import * as S from './Product.styled';

interface ProductProps {
  headline: string;
  body: string;
}

interface UpdateCounterProps {
  current: number;
  value: number;
}

export const Product: FC<ProductProps> = ({ headline, body, images, variants }) => {
  const [addToCartAmount, setAddToCartAmount] = useState(1);

  const getVariantId = (variant) => variant.shopifyId;
  const getShopifyId = (id: string) => {
    return PU.getGid(`shopify/ProductVariant`, id);
  };
  const shopifyId = getShopifyId(getVariantId(variants[0]));
  const [currentId, setCurrentId] = useState(shopifyId);
  const counterProps = {
    amountChange: 1,
    currentCount: addToCartAmount,
    updateCounter: ({ current, value }: UpdateCounterProps) => {
      setAddToCartAmount(current + value);
    },
    minimumValue: 1,
  };

  return (
    <S.Container>
      <S.Headline>{headline}</S.Headline>
      {body && <S.Body>{body}</S.Body>}
      <Counter {...counterProps} />
      <AddToCart
        shopifyId={PU.getGid(`shopify/ProductVariant`, getVariantId(variants[0]))}
        quantity={addToCartAmount}
      >
        Add to Cart
      </AddToCart>
      <FancyImageBox {...images} />
    </S.Container>
  );
};

export default Product;
