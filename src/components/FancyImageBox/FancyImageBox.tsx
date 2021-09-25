import React, { FC, ReactNode } from 'react';
import * as S from './FancyImageBox.styled';

interface FancyImageBoxProps {
  children: ReactNode;
}

export const FancyImageBox: FC<FancyImageBoxProps> = ({children}) => {
  return <S.Container>FancyImageBox{children}</S.Container>;
};

export default FancyImageBox;