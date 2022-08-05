import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Box, Grid, Typography } from '@mui/material';
import { TeasersGrid, ProductTeaser } from '~components/Teasers';
import { Image } from '~components/index';
import * as S from '~components/Category/Category.styled';
//import * as S from './Category.styled';

export const Category = ({
  image,
  products,
  id,
  title,
}) => {
  return (
    <S.Wrapper>
      <S.ProductsGrid container spacing={{ xs: 0, sm: 2 }} className="teasers-grid">
        {products.map((product) => {
          return (
            <S.TeaserWrapper item xs={12} sm={6} md={4} key={product.id}>
              <ProductTeaser {...product} />
            </S.TeaserWrapper>
          );
        })}
      </S.ProductsGrid>
    </S.Wrapper>
  );
};

export default Category;
