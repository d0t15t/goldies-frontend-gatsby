/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import cls from 'classnames';
import { Typography, Box } from '@mui/material'
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
  //const textStyle = teaserStyle === 'image-only' ? visuallyHidden : null;

  const getStyledTeaser = (teaserStyle) => {
    const template = {
      'image-only': S.StyledImageTeaser,
      product: S.StyledProductTeaser,
      slide: S.StyledSlideTeaser,
    };
    return teaserStyle in template ? template[teaserStyle] : S.StyledTeaser;
  };

  const wrapWithLink = (path, content) => <Link to={path}>{content}</Link>;

  const TeaserStyled = getStyledTeaser(teaserStyle);

  return (
    <TeaserStyled as="article" className={cls(['teaser'])}>
      {image && wrapWithLink(link, <Image data={image} alt={title} />)}
      <Box className={cls(['teaser--text-wrapper'])}>
        {wrapWithLink(
          link,
          <Typography variant="h5">
            {title}
          </Typography>
        )}
        {wrapWithLink(
          link,
          <Typography variant="subtitle1">
            {subTitle}
          </Typography>
        )}
      </Box>
    </TeaserStyled>
  );
};

export default Teaser;
