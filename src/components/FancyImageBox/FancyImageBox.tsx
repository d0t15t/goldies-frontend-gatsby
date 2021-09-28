import React, { FC, ReactNode } from 'react';
import { Image, Link, Modal } from '~components/index';
import * as S from './FancyImageBox.styled';

interface FancyImageBoxProps {
  children: ReactNode;
}

export const FancyImageBox: FC<FancyImageBoxProps> = ({ teaserImages, thumbnailImages }) => {
  const getImageSet = (images) =>
    images.map((image) => <Image data={image} key={image.id} alt={image?.alt} />);
  return (
    <S.Container>
      {getImageSet(teaserImages)}
      {getImageSet(thumbnailImages)}
    </S.Container>
  );
};
