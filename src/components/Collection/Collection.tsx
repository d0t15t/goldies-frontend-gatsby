import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Box, Grid, Typography } from '@mui/material';
import FeaturedProducts from '~components/FeaturedProducts/FeaturedProducts';
import { ProductTeaser } from '~components/Teasers';
import { Image } from '~components/index';
import * as S from './Collection.styled';
import { clearScreenDown } from 'readline';

interface CollectionProps {
  children: ReactNode;
  description: string;
  id: string;
}

export const Collection: FC<CollectionProps> = ({
  image,
  featuredDescription,
  displayFeatured,
  description,
  featured,
  products,
  id,
  title,
}) => {
  
  return (
    <S.Wrapper>
      {displayFeatured && (<S.Upper className="collection--upper">
        <Image data={image} alt={title} />
        <S.FeaturedWrapper className="collection--featured-products-wrapper">
          <FeaturedProducts products={featured} />
          <Box
            // variant="body1"
            dangerouslySetInnerHTML={{ __html: featuredDescription }}
            className={cls('collection--featured-products-text')}
          />
        </S.FeaturedWrapper>
      </S.Upper>)}
      <S.Description className="collection--description">
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
      </S.Description>
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

export default Collection;
