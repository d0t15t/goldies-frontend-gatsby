import React, { FunctionComponent } from 'react';
import { Teaser, TeaserProps } from '~components/Teasers';
import * as S from './Teasers.styled';

interface TeasersFancyProps {
  teasers: TeaserProps[];
}

export const TeasersFancy: FunctionComponent<TeasersFancyProps> = ({ teasers }) => {
  return (
    <S.FancyGrid>
      {teasers.map((teaser) => {
        return <Teaser {...teaser} key={teaser.id} />;
      })}
    </S.FancyGrid>
  );
};

export default TeasersFancy;
