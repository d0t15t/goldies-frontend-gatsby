import React, { FC, ReactNode } from 'react';
import * as S from './Tiles.styled';
import Teasers, { TeasersProps } from '~components/Teasers/Teasers';

export interface TilesProps {
  tiles: TeasersProps[];
}

const Tile: FC = ({ id, teasers }) => <Teasers teasers={teasers} />;

export const Tiles: FC<TilesProps> = ({ tiles }) => {
  return (
    <S.Container>
      {tiles.map((tile) => (
        <Tile key={tile.id} {...tile} />
      ))}
    </S.Container>
  );
};

export default Tiles;
