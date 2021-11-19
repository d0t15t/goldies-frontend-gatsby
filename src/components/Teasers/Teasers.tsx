import React, { FC } from 'react';
import { Teaser, TeaserProps } from '~components/Teasers/index';
import * as S from './Teasers.styled';

export interface TeasersProps {
  teasers: TeaserProps[];
}

export const Teasers: FC<TeasersProps> = ({ teasers }) => {
  return (
    <S.Teasers>
      {teasers.map((teaser) => {
        return <Teaser {...teaser} key={teaser.id} />;
      })}
    </S.Teasers>
  );
};

export default Teasers;
