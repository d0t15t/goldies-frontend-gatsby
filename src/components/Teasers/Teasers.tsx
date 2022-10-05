import React, { FC } from 'react';
import { useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, Teaser, TeaserProps, TeasersFancy, ProductTeaser, TeaserSimple } from '~components/Teasers';
import * as S from './Teasers.styled';

export const Teasers = ({ teasers, listStyle, itemTemplate }) => {
  const ItemTemplate = itemTemplate ?? TeaserSimple;
  const items = teasers.map(item => {
            return (
              <li key={item.id}><ItemTemplate {...item} /></li>
            );
          });
  switch (listStyle) {
    case 'grid':
      return (
        <S.TeasersGrid>
          {items}
        </S.TeasersGrid>
      );
    case 'fancy':
      const theme = useTheme();
      const isFancy = useMediaQuery(theme.breakpoints.up('sm'));
      const FancyTemplate = isFancy ? TeasersFancy : Swiper;
      return <FancyTemplate teasers={teasers} />;
    default:
      return (
        <S.TeasersBasic>
          {items}
        </S.TeasersBasic>
      );

  }
};

export default Teasers;
