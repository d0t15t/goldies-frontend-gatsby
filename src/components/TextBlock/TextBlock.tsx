import React, { FC, ReactNode } from 'react';
import * as S from './TextBlock.styled';

interface TextBlockProps {
  children: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = ({ children }) => {
  return <S.Container>TextBlock{children}</S.Container>;
};

export default TextBlock;
