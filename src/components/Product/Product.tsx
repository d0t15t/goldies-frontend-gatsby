/* eslint-disable react/no-danger */
import React, { FC, useState } from 'react';
import cls from 'classnames';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  AddToCart,
  Counter,
  FancyImageBox,
  Image,
  Price,
  ProductVariants,
} from '~components/index';

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

  // const decodeHTML = (html) => {
  //   if (typeof document === undefined) return '';
  //   const txt = document.createElement('textarea');
  //   txt.innerHTML = html;
  //   return txt.value;
  // };

  const theme = useTheme();
  const mqMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <S.Product>
      {images.teaserImages.length > 1 ? (
        <FancyImageBox {...images} />
      ) : (
        <Image data={images.teaserImages[0]} alt={headline} />
      )}
      <div className="product-info-wrapper">
        <S.Controls>
          <div className="price-wrapper">
            <Price value={currentVariant.price} />
            <AddToCart
              shopifyId={currentVariantId}
              quantity={addToCartAmount}
              title={productVariantTitle}
            />
          </div>
          <Counter {...counterProps} />
        </S.Controls>
        {/* {!mqMdUp && form} */}
        {body ? (
          <Box
            className={('product-body', 'body1')}
            dangerouslySetInnerHTML={{
              __html: body,
            }}
            // dangerouslySetInnerHTML={{
            //   __html: decodeHTML(body),
            // }}
          />
        ) : null}
        {/* {mqMdUp && form} */}
      </div>
    </S.Product>
  );
};

export default Product;
