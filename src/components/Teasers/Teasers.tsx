import React, { FC } from 'react';
import { useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, Teaser, TeaserProps, TeasersFancy, ProductTeaser } from '~components/Teasers';
import * as S from './Teasers.styled';

export interface TeasersProps {
  teasers: TeaserProps[];
}

export const Teasers: FC<TeasersProps> = ({ teasers, listStyle, itemTemplate }) => {
  const ItemTemplate = itemTemplate;
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
      const Template = isFancy ? TeasersFancy : Swiper;
      return <Template teasers={teasers} />;
    default:
      return (
        <S.TeasersBasic>
          {items}
        </S.TeasersBasic>
      );

  }
};

export default Teasers;
