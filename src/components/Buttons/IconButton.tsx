import React, { FC, ReactNode } from 'react';
// import { IconContext } from 'react-icons';
// import { BiCart, BiSearchAlt } from 'react-icons/bi';
// import { BsChevronDown } from 'react-icons/bs';
// import { CgClose } from 'react-icons/cg';
// import { FaShoppingBag } from 'react-icons/fa';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineClear } from 'react-icons/md';
import {
  Close,
  LocalMallOutlined,
  KeyboardArrowDownOutlined,
  Menu,
  Search,
} from '@mui/icons-material';
import { Button } from './Button';
import * as S from './Button.styled';
import { Console } from 'console';

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
  const { buttonStyles, buttonTemplate, children, direction, iconStyles, iconName, handleClick } = props;

  const iconTemplate = {
    bag: <LocalMallOutlined />,
    // cart: <BiCart />,
    chevronDown: <KeyboardArrowDownOutlined />,
    // clear: <MdOutlineClear />,
    close: <Close />,
    hamburger: <Menu />,
    search: <Search />,
  };
  const buttonProps = { ...props, iconName: null };
  return (
    <Button
      {...buttonProps}
    >
      {!direction && children}

      {iconName && iconName in iconTemplate ? iconTemplate[iconName] : 'defaultIconToDo'}

      {direction === 'right' && children}
    </Button>
  );
};

export default IconButton;
