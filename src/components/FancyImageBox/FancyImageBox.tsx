import React, { FC, ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Image, Link, Modal, Portal } from '~components/index';
import * as S from './FancyImageBox.styled';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/thumbs';

// import './styles.css';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

interface FancyImageBoxProps {
  children: ReactNode;
}

export const FancyImageBox: FC<FancyImageBoxProps> = ({ teaserImages, thumbnailImages }) => {
  const [lightbox, setLightBox] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getSlide = (image) => {
    return (
      <SwiperSlide key={image.id}>
        <Image data={image} alt={image?.alt} />
      </SwiperSlide>
    );
  };

  const getSlides = (images) => images.map((image) => getSlide(image));

  return (
    <S.Container>
      <Swiper
        style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="teaser-swiper"
      >
        {getSlides(teaserImages)}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        className="thumbnail-swiper"
      >
        {getSlides(thumbnailImages)}
      </Swiper>

      <Modal />
    </S.Container>
  );
};
