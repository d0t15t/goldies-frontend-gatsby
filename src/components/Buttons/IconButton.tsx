import React, { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BiCart, BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClear } from 'react-icons/md';
import { Button } from './Button';

export const IconButton = (props) => {
  const { buttonStyles, children, iconStyles, iconName, handleClick } = props;

  const iconTemplate = {
    cart: <BiCart />,
    clear: <MdOutlineClear />,
    close: <CgClose />,
    hamburger: <GiHamburgerMenu />,
    search: <BiSearchAlt />,
  };
  return (
    <Button {...props} type="button">
      <IconContext.Provider value={iconStyles ?? {}}>
        {iconName && iconName in iconTemplate ? iconTemplate[iconName] : 'defaultIconToDo'}
      </IconContext.Provider>
      {children}
    </Button>
  );
};

export default IconButton;
