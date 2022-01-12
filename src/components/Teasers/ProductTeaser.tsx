import React, { FC, ReactNode, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';
import cls from 'classnames';
import { Box, Grid } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import {
  AddToCart,
  Counter,
  FancyImageBox,
  Image,
  Link,
  Price,
  ProductVariants,
} from '~components/index';

import * as S from './Teaser.styled';

export interface TeaserProps {
  button: ReactNode;
  id: string;
  subTitle: string;
  teaserStyle: string | null;
  title: string;
  url: string | null;
  variant: Object;
}

export const ProductTeaser: FC<TeaserProps> = ({
  button,
  image,
  link,
  subTitle,
  teaserStyle,
  title,
  variant,
}) => {
  const ref = useRef(null);
  const isHover = useHover(ref);
  console.log('🚀 ~ file: ProductTeaser.tsx ~ line 34 ~ variant', variant);
  const wrapWithLink = (path, content) => <Link to={path}>{content}</Link>;
  return (
    <S.StyledProductTeaser
      as="article"
      className={cls(['teaser', isHover && 'has-hover'])}
      ref={ref}
    >
      {image && wrapWithLink(link, <Image data={image} alt={title} />)}
      <S.TitleWrapper className={cls(['teaser-text'])}>
        {wrapWithLink(link, <S.Text variant="h5">{title}</S.Text>)}
        {button}
        {subTitle && wrapWithLink(link, <S.Text variant="subtitle1">{subTitle}</S.Text>)}
      </S.TitleWrapper>
      <Box className={cls('teaser-text--lower')}>
        {/* <Box className="price-wrapper"> */}
        <Price value={variant.price} />
        {/* </Box> */}
        <AddToCart shopifyId={variant.shopifyId} title={title} variant="text" />
      </Box>
    </S.StyledProductTeaser>
  );
};

export default ProductTeaser;
