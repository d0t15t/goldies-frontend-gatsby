import React, { FC, ReactNode, useContext, useRef, useState } from 'react';
import { useDimensions } from 'react-hook-dimensions';
import { useScreen } from 'usehooks-ts';
import { Swiper as SW, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Context, useDispatch } from '~context';
import { Teaser, TeaserProps } from '~components/Teasers';
import * as S from './Swiper.styled';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

interface VerticalSliderProps {
  children: ReactNode;
}

export const Swiper: FC<VerticalSliderProps> = ({ teasers }) => {
  const [{ pageDimensions }, dispatch] = useContext(Context);
  const [ref, box] = useDimensions({
    dependencies: [],
  });
  const screen = useScreen();

  const getHeight = () => {
    const padding = (screen?.availWidth - pageDimensions.width) / 2;
    return screen?.availHeight - box.positionTop - padding;
  };

  return (
    <S.Container h={getHeight()}>
      <SW
        ref={ref}
        pagination={{
          clickable: true,
        }}
      >
        {teasers
          ? teasers.map((teaser, key) => (
              <SwiperSlide key={teaser.id}>
                <Teaser {...teaser} teaserStyle="slide" />
              </SwiperSlide>
            ))
          : null}
      </SW>
    </S.Container>
  );
};

export default Swiper;
