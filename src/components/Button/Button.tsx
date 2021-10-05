import React, { FC, ReactNode } from 'react';
import * as S from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  handleClick: Function;
  styles: string;
  type: string;
}

export const Button: FC<ButtonProps> = ({ children, handleClick, styles, type }) => {
  return (
    <S.Container type={type} onClick={handleClick} styles={styles}>
      {children}
    </S.Container>
  );
};

export default Button;
