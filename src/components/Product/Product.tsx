import React, { FC, useState } from 'react';
import { AddToCart, Counter, FancyImageBox, Image, Link, Modal } from '~components/index';

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
  const getVariantId = (variant) => variant.shopifyId;
  const [cartAmount, setCartAmount] = useState(1);
  const getShopifyId = (id: string) => {
    return PU.getGid(`shopify/ProductVariant`, id);
  };
  const shopifyId = getShopifyId(getVariantId(variants[0]));
  const [currentId, setCurrentId] = useState(shopifyId);
  const counterProps = {
    amountChange: 1,
    currentCount: cartAmount,
    updateCounter: ({ current, value }: UpdateCounterProps) => {
      setCartAmount(current + value);
    },
    minimumValue: 1,
  };

  return (
    <S.Container>
      <S.Headline>{headline}</S.Headline>
      {body && <S.Body>{body}</S.Body>}
      <Counter {...counterProps} />
      <AddToCart
        // shopifyId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMTc2MjA4ODk5"
        shopifyId={PU.getGid(`shopify/ProductVariant`, getVariantId(variants[0]))}
        quantity={cartAmount}
      >
        Add to Cart
      </AddToCart>
      <FancyImageBox {...images} />
      <Modal />
    </S.Container>
  );
};

export default Product;
