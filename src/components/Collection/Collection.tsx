import React, { FC, ReactNode } from 'react';
import dotenv from 'dotenv';
import { Box, Grid, Typography } from '@mui/material';
import FeaturedProducts from '~components/FeaturedProducts/FeaturedProducts';
import { TeasersGrid, ProductTeaser } from '~components/Teasers';
import * as S from './Collection.styled';

interface CollectionProps {
  children: ReactNode;
  description: string;
  id: string;
}

export const Collection: FC<CollectionProps> = ({ description, featured, products, id }) => {
  return (
    <S.Wrapper container spacing={{ xs: 0, sm: 2 }} className="teasers-grid">
      <FeaturedProducts products={featured} />
      <S.Description>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
      </S.Description>

      {products.map((product) => {
        return (
          <S.TeaserWrapper item xs={12} sm={6} md={4} key={product.id}>
            <ProductTeaser {...product} />
          </S.TeaserWrapper>
        );
      })}
    </S.Wrapper>
  );
};

export default Collection;
