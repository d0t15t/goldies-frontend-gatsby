import React, { FC, ReactNode } from 'react';
import * as S from './Button.styled';

interface ButtonProps {
  buttonTemplate: string;
  children: ReactNode;
  handleClick: Function;
  styles: string;
  type: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { buttonTemplate, children, classes, styles, type } = props;
  const templateMap = {
    basic: S.BasicButton,
    default: S.DefaultButton,
    link: S.LinkButton,
    noStyle: S.NoStyleButton,
  };
  const Template = buttonTemplate in templateMap ? templateMap[buttonTemplate] : S.NoStyleButton;
  return (
    <Template {...props} type={type || 'button'} styles={styles}>
      {children}
    </Template>
  );
};

export default Button;
