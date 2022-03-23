import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Box, Grid, Typography } from '@mui/material';
import { AddToCart, Price } from '~components';
import { TeasersGrid, ProductTeaser } from '~components/Teasers';
import * as S from './FeaturedProducts.styled';

interface FeaturedProductsProps {
  children: ReactNode;
  description: string;
  id: string;
}

const FeaturedProducts: FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => {
        return product.variants.map((variant) => {
          const { shopifyId, title, price } = variant;

          return (
            <Box item xs={12} sm={6} md={4} key={variant.id}>
              <Typography variant="button">
                {title} ~ <Price value={variant.price} />
              </Typography>
              <AddToCart shopifyId={shopifyId} title={title} />
            </Box>
          );
        });
      })}
    </Grid>
  );
};

export default FeaturedProducts;
