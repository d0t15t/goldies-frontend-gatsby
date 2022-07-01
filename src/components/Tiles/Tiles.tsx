import React, { FC, ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as S from './Tiles.styled';
import { Teasers, TeasersProps } from '~components/Teasers/Teasers';
import { Cart, TextBlock } from '~components';

export interface TilesProps {
  tiles: TeasersProps[];
}

export const Tiles: FC<TilesProps> = ({ tiles }) => {
  const theme = useTheme();
  const mqMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const tileMap = {
    paragraph__tiles: ({ teasers, id }) => <Teasers teasers={teasers} key={id} />,
    // paragraph__text: ({ teasers, id }) => <TextBlock key={id} />,
    paragraph__cart: ({ teasers, id }) => <Cart key={id} />,
  };

  return (
    <>
      {tiles.map((tile) => {
        return tile?.internal?.type in tileMap ? tileMap[tile.internal.type]({ ...tile }) : null;
      })}
    </>
  );
};

export default Tiles;
