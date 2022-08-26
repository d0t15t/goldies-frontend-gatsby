/* eslint-disable react/no-danger */
import React, { FC, useState } from 'react';
import cls from 'classnames';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  AddToCart,
  Counter,
  FancyImageBox,
  Link,
  Image,
  Price,
  ProductVariants,
  Related
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

export const Product: FC<ProductProps> = ({ body, headline, images, variants, relatedItems }) => {
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

  const decodeHTML = (html) => {
    if (typeof document === undefined) return '';
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const theme = useTheme();
  const mqMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const classNameBase = 'product-page';
  const cnb = classNameBase;
  const formNameBase = `${cnb}--add-to-cart-form`;
  const fnb = formNameBase;

  return (
    <>
      <S.Product className={cls([cnb])}>
        {images.teaserImages.length > 1 ? (
          <FancyImageBox {...images} />
        ) : (
          <Image data={images.teaserImages[0]} alt={headline} />
        )}
        <div className={cls(`${cnb}--info-wrapper`)}>
          <Typography variant="h1" aria-hidden={true}>
            {headline}
          </Typography>
          <form
            id={`${formNameBase}`}
            name={`${formNameBase}`}
            className={cls(`${formNameBase}`, { [`${fnb}--quantity-over-1`]: addToCartAmount > 1 })}
          >
            <Box className={cls(`${fnb}--price`)}>
              <Price value={currentVariant.price} />
            </Box>
            {variants.length > 1 && (
              <Box className={cls(`${fnb}--variants`)}>
                <ProductVariants
                  items={variants}
                  current={currentVariant}
                  updateCurrentId={updateCurrentVariantId}
                />
              </Box>
            )}
            <Box className={cls(`${fnb}--quantity`)}>
              <Counter {...counterProps} />
            </Box>
            <Box className={cls(`${fnb}--actions`)}>
              <AddToCart
                shopifyId={currentVariantId}
                quantity={addToCartAmount}
                title={productVariantTitle}
              />
            </Box>
          </form>
          {/* {!mqMdUp && form} */}
          {body ? (
            <span
              className={cls(`${cnb}--product-body`)}
              dangerouslySetInnerHTML={{
                __html: body,
              }}
            />
          ) : null}
          {/* {mqMdUp && form} */}
        </div>
      </S.Product>
    <Related items={relatedItems} />
</>
  );
};

export default Product;
