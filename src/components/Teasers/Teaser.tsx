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

export const Teaser: FC<TeaserProps> = ({ teaserStyle, title, subTitle, link, image }) => {
  const TeaserInner = () => {
    return (
      <>
        <S.TitleWrapper>
          <S.Text variant="h5">{title}</S.Text>
          <S.Text variant="subtitle1">{subTitle}</S.Text>
        </S.TitleWrapper>
        {image && <Image data={image} alt={title || ''} />}
      </>
    );
  };
  return (
    <S.Teaser>
      {link ? (
        <Link to={link}>
          <TeaserInner />
        </Link>
      ) : (
        <TeaserInner />
      )}
    </S.Teaser>
  );
};

export default Teaser;
