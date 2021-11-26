import React, { FC, ReactNode } from 'react';
import { Teasers } from '~components/Teasers/Teasers';
import * as S from './Collection.styled';

interface CollectionProps {
  children: ReactNode;
}

export const Collection: FC<CollectionProps> = ({ headline, body, products }) => {
  console.log('🚀 ~ file: Collection.tsx ~ line 10 ~ products', products);
  return (
    <S.Collection>
      <S.Headline>{headline}</S.Headline>
      {body && <S.Body>{body}</S.Body>}
      {products && <Teasers teasers={products} />}
    </S.Collection>
  );
};

export default Collection;
