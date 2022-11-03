import React, { FC } from 'react';
import { useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, TeasersFancy, TeaserSimple } from '~components/Teasers';
import Carousel from '~components/Swiper/Carousel';
import * as S from './Teasers.styled';

export const Teasers = ({ teasers, listStyle, itemTemplate }) => {
  if (!teasers) return null;
  const ItemTemplate = itemTemplate ?? TeaserSimple;
  const items = teasers.map((item) => {
    return (
      <li key={item.id}>
        <ItemTemplate {...item} />
      </li>
    );
  });
  const theme = useTheme();
  const getMq = () => {
    const isMd = useMediaQuery(theme.breakpoints.up('sm'));
    const isLg = useMediaQuery(theme.breakpoints.up('md'));
    if (isLg && isMd) return 'lg';
    if (!isLg && isMd) return 'md';
    return 'sm';
  };
  const mq = getMq();
  const isFancy = () => mq !== 'sm';

  switch (listStyle) {
    case 'carousel':
      return <Carousel teasers={teasers} size={mq} />;
    case 'slider':
      return <Swiper teasers={teasers} />;
    case 'grid':
      return <S.TeasersGrid>{items}</S.TeasersGrid>;
    case 'fancy':
      const FancyTemplate = isFancy() ? TeasersFancy : Swiper;
      return <FancyTemplate teasers={teasers} />;
    default:
      return <S.TeasersBasic>{items}</S.TeasersBasic>;
  }
};

export default Teasers;
