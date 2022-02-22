import React, { FC } from 'react';
import { useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, Teaser, TeaserProps, TeasersFancy, TeasersGrid } from '~components/Teasers';
import * as S from './Teasers.styled';

export interface TeasersProps {
  teasers: TeaserProps[];
}

export const Teasers: FC<TeasersProps> = ({ teasers, teaserStyle }) => {
  const theme = useTheme();
  const fancy = useMediaQuery(theme.breakpoints.up('sm'));

  const teasersMap = ({ fancy }) => {
    if (fancy) {
      return TeasersFancy;
    }
    return Swiper;
  };
  const Template = teasersMap({ fancy });
  return <Template teasers={teasers} />;
};

export default Teasers;
