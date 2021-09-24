/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Image, Link } from '~components/index';
import * as S from './Teaser.styled';

export interface TeaserProps {
  id: string;
  subTitle: string;
  teaserStyle: string | null;
  title: string;
  url: string | null;
}

export const Teaser: FC<TeaserProps> = ({ teaserStyle, title, subTitle, url, image }) => {
  const TeaserInner = () => {
    return (
      <>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.TitleWrapper>
        {image && <Image data={image} alt={title || ''} />}
      </>
    );
  };
  return (
    <S.Container>
      {url ? (
        <Link url={url}>
          <TeaserInner />
        </Link>
      ) : (
        <TeaserInner />
      )}
    </S.Container>
  );
};

export default Teaser;
