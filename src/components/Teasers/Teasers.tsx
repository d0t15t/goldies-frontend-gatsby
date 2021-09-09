import React, { FunctionComponent } from 'react';
import { Teaser, TeaserProps } from '~components/Teasers/index';
import * as S from './Teasers.styled';

export interface TeasersProps {
  teasers: TeaserProps[];
}

export const Teasers: FunctionComponent<TeasersProps> = ({ teasers }) => {
  return (
    <S.Container>
      {teasers.map((teaser) => {
        return <Teaser {...teaser} key={teaser.id} />;
      })}
    </S.Container>
  );
};

export default Teasers;
