import React, { FC, ReactNode } from 'react';
import * as S from './DrawerContent.styled';

interface DrawerContentProps {
  children: ReactNode;
}

export const DrawerContent: FC<DrawerContentProps> = ({children}) => {
  return <S.Container>DrawerContent{children}</S.Container>;
};

export default DrawerContent;