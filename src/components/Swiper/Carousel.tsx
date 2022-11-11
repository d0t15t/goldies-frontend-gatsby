import React, { FC, ReactNode, useContext, useRef, useState } from 'react';
import { useDimensions } from 'react-hook-dimensions';
import { useScreen } from 'usehooks-ts';
import { Swiper as SW, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useTheme } from '@mui/material/styles';
import { Context, useDispatch } from '~context';
import { Teaser, TeaserProps, ProductTeaser } from '~components/Teasers';
import * as S from './Swiper.styled';
import * as U from '~utils';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

export const Carousel = ({ teasers, size }) => {
  const theme = useTheme();
  const [{ pageDimensions }, dispatch] = useContext(Context);
  const [ref, box] = useDimensions({
    dependencies: [],
  });
  const screen = useScreen();

  const getHeight = () => {
    const padding = (screen?.availWidth - pageDimensions.width) / 2;
    return screen?.availHeight - box.positionTop - padding;
  };

  const getSlideCount = () => {
    switch (size) {
      case 'lg':
        return 4;
      case 'md':
        return 3;
      default:
        // 'sm'.
        return 2;
    }
  };

  const getVariant = (teaser) => {
    const variant = teaser.rels.product.rels.variants[0] ?? {};
    const shopifyId = U.getProductVariantGid(variant.shopifyId);

    return { ...variant, shopifyId };
  };

  const slides = teasers
    ? teasers.map((teaser, key) => (
        <SwiperSlide key={teaser.id}>
          <ProductTeaser
            {...teaser}
            variant={getVariant(teaser)}
            teaserStyle="slide"
            link={U.getNodeUrl(teaser)}
            image={teaser.rels.product.rels.image.localFile.teaserImage.gatsbyImageData}
          />
        </SwiperSlide>
      ))
    : NULL;

  return (
    <S.CarouselWrapper h={getHeight()}>
      <SW
        ref={ref}
        pagination={{
          clickable: true,
        }}
        slidesPerView={getSlideCount()}
        // spaceBetween={theme.spacing(1)}
        spaceBetween={8}
      >
        {slides}
      </SW>
    </S.CarouselWrapper>
  );
};

export default Carousel;
