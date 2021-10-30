import React, { FC, useState } from 'react';
import { Button } from '~components';
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
    <S.Container>
      <Button
        name="increase-quantity"
        onClick={() => handleClick(change)}
        disabled={isDisabled.maximum()}
        buttonTemplate="default"
        type="button"
      >
        + <span className="visually-hidden">Increase amount</span>
      </Button>
      <S.CurCount>{currentCount}</S.CurCount>
      <Button
        name="decrease-quantity"
        onClick={() => handleClick(change * -1)}
        disabled={isDisabled.minimum()}
        buttonTemplate="default"
        type="button"
      >
        - <span className="visually-hidden">Decrease amount</span>
      </Button>
    </S.Container>
  );
};

export default Counter;
