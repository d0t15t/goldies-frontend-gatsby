import React, { FC, ReactNode } from 'react';
import { Box, Grid } from '@mui/material';
import { TeasersGrid, ProductTeaser } from '~components/Teasers';
import * as S from './Collection.styled';

interface CollectionProps {
  children: ReactNode;
}

export const Collection: FC<CollectionProps> = ({ products }) => {
  return (
    <Grid container spacing={{ xs: 0, sm: 2 }} className="teasers-grid">
      {products.map((product) => {
        return (
          <S.TeaserWrapper item xs={12} sm={6} md={4} key={product.id}>
            <ProductTeaser {...product} />
          </S.TeaserWrapper>
        );
      })}
    </Grid>
  );
};

export default Collection;
