/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Link } from '~components/index';
import * as S from './Teaser.styled';

export interface TeaserProps {
  id: string;
  // imageFluid: FluidObject;
  subTitle: string;
  title: string;
  url: string;
}

export const Teaser: FunctionComponent<TeaserProps> = ({ title, subTitle, url, imageFluid }) => {
  return (
    <S.Container>
      <Link url={url}>
        {title}
        {subTitle}
        {/* <Img fluid={imageFluid} /> */}
      </Link>
    </S.Container>
  );
};

export default Teaser;
