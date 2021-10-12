import React, { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';
import { Button } from './Button';

interface CloseButtonProps {
  buttonStyles: string;
  children: ReactNode;
  handleClick: Function;
  iconStyles: Object;
}

export const CloseButton: FC<CloseButtonProps> = ({
  buttonStyles,
  children,
  iconStyles,
  handleClick,
}) => {
  return (
    <Button handleClick={handleClick} styles={buttonStyles} type="button">
      <IconContext.Provider value={iconStyles}>
        <CgClose />
      </IconContext.Provider>
      {children}
    </Button>
  );
};

export default CloseButton;
