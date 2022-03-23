import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Teaser, TeaserProps } from '~components/Teasers';
import * as S from './Teasers.styled';

interface TeasersGridProps {
  teasers: TeaserProps[];
}

export const TeasersGrid: FC<TeasersGridProps> = ({ teasers }) => {
  return (
    <Grid container spacing={{ xs: 0, sm: 2 }} className="teasers-grid">
      {teasers.map((teaser) => {
        const { id, children } = teaser;
        return (
          <S.TeaserWrapper item xs={12} sm={6} key={teaser.id}>
            {children}
          </S.TeaserWrapper>
        );
      })}
    </Grid>
  );
};

export default TeasersGrid;
