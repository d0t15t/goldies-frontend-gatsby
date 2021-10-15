import React, { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BiCart, BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClear } from 'react-icons/md';
import { Button } from './Button';

interface IconButtonProps {
  buttonStyles: string | null;
  children: ReactNode;
  handleClick: Function | null;
  iconName: string | null;
  iconStyles: Object | null;
}

export const IconButton: FC<IconButtonProps> = ({
  buttonStyles,
  children,
  iconStyles,
  iconName,
  handleClick,
}) => {
  const iconTemplate = {
    cart: <BiCart />,
    clear: <MdOutlineClear />,
    close: <CgClose />,
    hamburger: <GiHamburgerMenu />,
    search: <BiSearchAlt />,
  };
  return (
    <Button handleClick={handleClick} styles={buttonStyles} type="button">
      <IconContext.Provider value={iconStyles ?? {}}>
        {iconName && iconName in iconTemplate ? iconTemplate[iconName] : 'default icon'}
      </IconContext.Provider>
      {children}
    </Button>
  );
};

export default IconButton;
