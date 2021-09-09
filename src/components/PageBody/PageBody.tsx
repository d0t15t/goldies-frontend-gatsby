import React, { FC } from 'react';
import * as I from '~utils/interfaces';
import * as S from './PageBody.styled';
import { Tiles, TilesProps } from '~components/index';

export interface PageBodyProps {
  tiles: TilesProps;
  type: string;
}

export const PageBody: FC<PageBodyProps> = ({ tiles, type }) => {
  console.log('🚀 ~ file: PageBody.tsx ~ line 12 ~ tiles', tiles);
  const pageBodyTemplate = {
    node__page: () => {
      return <Tiles tiles={tiles} />;
    },
  };
  return <S.Container>{pageBodyTemplate[type]()}</S.Container>;
};

export default PageBody;
