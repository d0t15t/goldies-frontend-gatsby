import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Box, Grid, Typography } from '@mui/material';
import { AddToCart, Price } from '~components';
import { TeasersGrid, ProductTeaser } from '~components/Teasers';
import * as S from './FeaturedProducts.styled';
// eslint-disable prettier/prettier
interface FeaturedProductsProps {
  children: ReactNode;
  description: string;
  id: string;
}

const FeaturedProducts: FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <S.Wrapper className={cls(['featured-products'])}>
      {products.map((product) => {
        return product.variants.map((variant) => {
          const { shopifyId, title, price } = variant;

          return (
            <S.Item key={variant.id}>
              <span className={cls(['featured-products--title'])}>
                <Typography variant="span">{title} ~ </Typography>
                <Price value={variant.price} />
              </span>
              <AddToCart shopifyId={shopifyId} title={title} />
            </S.Item>
          );
        });
      })}
    </S.Wrapper>
  );
};

export default FeaturedProducts;
