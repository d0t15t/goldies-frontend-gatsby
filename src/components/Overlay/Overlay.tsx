import React, { FC, ReactNode } from 'react';
import * as S from './Overlay.styled';

interface OverlayProps {
  children: ReactNode;
}

export const Overlay: FC<OverlayProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Overlay;
