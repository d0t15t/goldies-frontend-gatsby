import React, { FC } from 'react';
import { useMediaQuery, Grid } from '@mui/material';
import { Teaser, TeaserProps, TeasersFancy } from '~components/Teasers';
import * as S from './Teasers.styled';

export interface TeasersProps {
  teasers: TeaserProps[];
  fancy: boolean;
}

export const Teasers: FC<TeasersProps> = ({ teasers, fancy }) => {
  return fancy ? (
    <TeasersFancy teasers={teasers} />
  ) : (
    <Grid container spacing={{ xs: 0, sm: 2 }} className="teasers-grid">
      {teasers.map((teaser) => {
        return (
          <Grid item xs={12} sm={6} key={teaser.id}>
            <Teaser {...teaser} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Teasers;
