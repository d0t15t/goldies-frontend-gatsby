import React, { FC, ReactNode } from 'react';
import * as S from './DrawerButton.styled';

interface DrawerButtonProps {
  children: ReactNode;
}

export const DrawerButton: FC<DrawerButtonProps> = ({ children }) => {
  return <S.Container>DrawerButton{children}</S.Container>;
};

export default DrawerButton;
