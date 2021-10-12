import React, { FC, ReactNode, useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Thumbs } from 'swiper';
import { ModalContext, useDispatch } from '~context';
import { Button, Image, Link, Modal } from '~components';
import * as S from './FancyImageBox.styled';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/thumbs';

SwiperCore.use([Keyboard, Navigation, Thumbs]);

interface FancyImageBoxProps {
  children: ReactNode;
}

export const FancyImageBox: FC<FancyImageBoxProps> = ({
  thumbnailImages,
  teaserImages,
  largeImages,
}) => {
  const [{ modalStatus }, dispatch] = useContext(ModalContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getSlide = (image) => {
    return (
      <SwiperSlide key={image.id}>
        <Button type="button" handleClick={() => dispatch({ type: 'modalStatus', payload: true })}>
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

      {/* <Modal
        status={modalStatus}
        setStatus={(newStatus: boolean) => dispatch({ type: 'modalStatus', payload: newStatus })}
      >
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
          {getSlides(largeImages)}
        </Swiper>
      </Modal> */}
    </S.Container>
  );
};
