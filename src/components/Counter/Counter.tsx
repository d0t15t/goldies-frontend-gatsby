import React, { FC, useState } from 'react';
import cls from 'classnames';
import {
  FormControl,
  InputLabel,
  Box,
  Input,
  MenuItem,
  Button,
  ButtonGroup,
  Grid,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { ExpandMore } from '@mui/icons-material';

import { BsChevronDown } from 'react-icons/bs';
import { Dropdown } from '~components';

import * as S from './Counter.styled';

interface CounterProps {
  amountChange: number;
  currentCount: number;
  updateQuantity: Function;
  minimumValue: number;
  targetId: string;
}

export const Counter: FC<CounterProps> = ({
  amountChange,
  currentCount,
  minimumValue,
  targetId,
  updateQuantity,
}) => {
  // @todo: add Component handling for state if no default is provided?
  const change = amountChange ?? 1;
  const minimum = minimumValue ?? 1;
  const handleClick = (increment: number) => {
    const newQuantity = currentCount + increment;
    updateQuantity({ quantity: newQuantity, targetId });
  };

  const isDisabled = {
    minimum: () => currentCount <= minimum,
    maximum: () => false,
  };
  return (
    <S.Counter className="counter--wrapper">
      <FormLabel className={ cls('counter--label') } variant="overline">
        Quantity:
      </FormLabel>
      <ButtonGroup className="counter">
        <Button
          aria-label="increase-quantity"
          onClick={() => handleClick(change)}
          disabled={isDisabled.maximum()}
          type="button"
          variant="outlined"
          color="secondary"
        >
          +
        </Button>
        {/* <Input disabled disableUnderline={true} value={currentCount} /> */}
        <Button disabled>{currentCount}</Button>
        {currentCount > 1 && (
          <Button
            aria-label="decrease-quantity"
            onClick={() => handleClick(change * -1)}
            disabled={isDisabled.minimum()}
            type="button"
            variant="outlined"
            color="secondary"
          >
            -
          </Button>
        )}
      </ButtonGroup>
    </S.Counter>
  );
};

export default Counter;
