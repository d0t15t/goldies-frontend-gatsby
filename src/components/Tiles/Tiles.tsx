import React, { FC, ReactNode } from 'react';
import * as S from './Tiles.styled';
import { Teasers, TeasersProps } from '~components/Teasers/Teasers';
import { TextBlock } from '~components/TextBlock/TextBlock';

export interface TilesProps {
  tiles: TeasersProps[];
}

export const Tiles: FC<TilesProps> = ({ tiles }) => {
  const tileMap = {
    paragraph__tiles: ({ teasers, id }) => <Teasers teasers={teasers} key={id} />,
    paragraph__text: ({ teasers, id }) => <TextBlock key={id} />,
  };

  return <S.Container>{tiles.map((tile) => tileMap[tile.internal.type]({ ...tile }))}</S.Container>;
};

export default Tiles;
