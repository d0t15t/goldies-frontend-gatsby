import React, { FC, ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Thumbs } from 'swiper';
import { Button, Image, Link, Modal, Portal } from '~components/index';
import * as S from './FancyImageBox.styled';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/thumbs';

// import './styles.css';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Thumbs]);

interface FancyImageBoxProps {
  children: ReactNode;
}

export const FancyImageBox: FC<FancyImageBoxProps> = ({ teaserImages, thumbnailImages }) => {
  const [lightbox, setLightBox] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getSlide = (image) => {
    return (
      <SwiperSlide key={image.id}>
        <Button type="button" handleClick={() => setLightBox(true)}>
          <Image data={image} alt={image?.alt} />
        </Button>
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
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        onSlideChange={() => console.log('slider main change')}
        pagination={{ clickable: true }}
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

      <Modal status={lightbox} setStatus={setLightBox}>
        <Swiper
          style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="teaser-swiper"
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          onSlideChange={() => console.log('slider main change')}
          pagination={{ clickable: true }}
        >
          {getSlides(teaserImages)}
        </Swiper>
      </Modal>
    </S.Container>
  );
};
