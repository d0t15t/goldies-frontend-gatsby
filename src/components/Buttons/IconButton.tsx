import React, { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BiCart, BiSearchAlt } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaShoppingBag } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClear } from 'react-icons/md';
import { Button } from './Button';

interface IconButtonProps {
  buttonStyles: object;
  buttonTemplate: string;
  children: ReactNode;
  direction: string | null;
  iconStyles: object;
  iconName: string;
  handleClick: Function;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const { buttonStyles, buttonTemplate, children, direction, iconStyles, iconName, handleClick } =
    props;

  const iconTemplate = {
    bag: <FaShoppingBag />,
    cart: <BiCart />,
    chevronDown: <BsChevronDown />,
    clear: <MdOutlineClear />,
    close: <CgClose />,
    hamburger: <GiHamburgerMenu />,
    search: <BiSearchAlt />,
  };
  return (
    <Button {...props} type="button">
      {!direction && children}
      <IconContext.Provider value={iconStyles ?? {}}>
        {iconName && iconName in iconTemplate ? iconTemplate[iconName] : 'defaultIconToDo'}
      </IconContext.Provider>
      {direction === 'right' && children}
    </Button>
  );
};

export default IconButton;
