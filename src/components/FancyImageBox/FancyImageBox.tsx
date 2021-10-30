import React, { FC, ReactNode, useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Navigation, Thumbs } from 'swiper';
import { Context, useDispatch } from '~context';
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
  const [{ modalIsOpen, modalContent }, dispatch] = useContext(Context);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const launchModal = (content) => {
    dispatch({ type: 'modalIsOpen', payload: true });
    dispatch({ type: 'modalContent', payload: content });
  };

  const ModalContent = ({ children }) => (
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
      {children}
    </Swiper>
  );

  const getSlide = (image, templateName, handleClick) => {
    const slideTemplate = {
      withButton: (
        <Button type="button" onClick={handleClick}>
          <Image data={image} alt={image?.alt} />
        </Button>
      ),
      default: <Image data={image} alt={image?.alt} />,
    };
    return (
      <SwiperSlide key={image.id}>
        {templateName in slideTemplate ? slideTemplate[templateName] : slideTemplate.default}
      </SwiperSlide>
    );
  };

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
        {teaserImages.map((image) =>
          getSlide(image, 'withButton', () =>
            launchModal(
              <ModalContent>
                {largeImages.map((image) => getSlide(image, '', () => null))}
              </ModalContent>
            )
          )
        )}
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
        {thumbnailImages.map((image) => getSlide(image, ''))}
      </Swiper>
    </S.Container>
  );
};
