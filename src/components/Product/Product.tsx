import React, { FC, useState } from 'react';
import { AddToCart, Counter, FancyImageBox, Price, ProductVariants } from '~components/index';

import * as U from '~utils';
import * as S from './Product.styled';

interface ProductProps {
  headline: string;
  body: string;
  images: Object[];
  variants: Object[];
}

interface UpdateCounterProps {
  quantity: number;
}

export const Product: FC<ProductProps> = ({ body, headline, images, variants }) => {
  const [addToCartAmount, setAddToCartAmount] = useState(1);

  const [currentVariantId, setCurrentVariantId] = useState(variants[0].shopifyId);

  const updateCurrentVariantId = (id: string) => setCurrentVariantId(id);

  const currentVariant = U.getCurrentVariant(variants, currentVariantId);

  const productVariantTitle = U.getProductVariantTitle(headline, currentVariant);

  const counterProps = {
    amountChange: 1,
    currentCount: addToCartAmount,
    updateQuantity: ({ quantity }: UpdateCounterProps) => {
      setAddToCartAmount(quantity);
    },
    minimumValue: 1,
  };

  return (
    <S.Container>
      {/* <S.Headline>{headline}</S.Headline>
      {body ? <S.Body>{body}</S.Body> : null} */}

      <S.Controls>
        <form>
          <S.ControlsInner>
            <AddToCart
              shopifyId={currentVariantId}
              quantity={addToCartAmount}
              title={productVariantTitle}
            />
            <Price value={currentVariant.price} />
            <Counter {...counterProps} />
            <ProductVariants
              items={variants}
              current={currentVariant}
              updateCurrentId={updateCurrentVariantId}
            />
          </S.ControlsInner>
        </form>
      </S.Controls>
      <FancyImageBox {...images} />
    </S.Container>
  );
};

export default Product;
