import React, { FC, ReactNode } from 'react';
import cls from 'classnames';
import { Button, Portal } from '~components';
import * as S from './Dropdown.styled';

interface DropdownProps {
  children: ReactNode;
  classNames: string;
  getMenuProps: Function;
  isOpen: boolean;
  ltr: boolean;
  styles: Object;
}
export const Dropdown: FC<DropdownProps> = ({
  children,
  classNames,
  getMenuProps,
  isOpen,
  ltr,
  styles,
}) => {
  return (
    // <Portal>
    <S.Wrapper {...getMenuProps()} className={cls(['dropdown-wrapper', classNames])}>
      {isOpen && (
        <S.DropDown parentCoordinates={{ ...styles }} ltr={ltr}>
          {children}
        </S.DropDown>
      )}
    </S.Wrapper>
    // </Portal>
  );
};

export default Dropdown;
