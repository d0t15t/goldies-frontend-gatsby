import React, { FC, ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as S from './Tiles.styled';
import { Teasers, TeasersProps } from '~components/Teasers/Teasers';
import { Cart, TextBlock, Overview } from '~components';

export interface TilesProps {
  tiles: TeasersProps[];
}

export const Tiles: FC<TilesProps> = ({ tiles }) => {
  const theme = useTheme();
  const mqMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const tileMap = {
    paragraph__tiles: ({ teasers, id, teaserStyle}) => <Teasers listStyle='fancy' teasers={teasers} key={id} />,
    paragraph__text: ({ text, id }) => <TextBlock key={id} text={text}/>,
    paragraph__cart: ({ teasers, id }) => <Cart key={id} />,
    paragraph__overview: ({ displayName, id }) => <Overview displayName={displayName} key={id} />,
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
