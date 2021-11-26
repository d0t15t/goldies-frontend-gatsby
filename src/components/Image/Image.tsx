import React, { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as S from './Image.styled';

interface ImageProps {
  alt: string;
}

export const Image: FC<ImageProps> = ({ alt, data }) => {
  return (
    // <S.Container>
    <GatsbyImage image={getImage(data)} alt={alt ?? ''} />
    // </S.Container>
  );
};
