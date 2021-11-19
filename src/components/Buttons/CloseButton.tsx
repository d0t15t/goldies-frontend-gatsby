import React, { FC, ReactNode } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  InputLabel,
} from '@mui/material';
import { Close } from '@mui/icons-material';

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
  name,
}) => {
  return (
    <IconButton onClick={handleClick}>
      <Close />
      {children}
    </IconButton>
  );
};

export default CloseButton;
