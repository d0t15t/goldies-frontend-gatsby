import React, { FC, useState } from 'react';
import * as S from './Counter.styled';

interface CounterProps {
  amountChange: number;
  currentCount: number;
  updateCounter: Function;
  minimumValue: number;
}

export const Counter: FC<CounterProps> = ({
  amountChange,
  currentCount,
  updateCounter,
  minimumValue,
}) => {
  // @todo: add Component handling for state if no default is provided?
  // const [current, setCurrent] = useState(currentCount ?? 1);
  const change = amountChange ?? 1;
  const minimum = minimumValue ?? 1;
  const handleClick = (value: number) => {
    updateCounter({ current: currentCount, value });
    // updateCounter({ current, value });
    // setCurrent(currentCount);
  };
  const isDisabled = {
    minimum: () => currentCount <= minimum,
    // minimum: () => current <= minimum,
    maximum: () => false,
  };
  return (
    <S.Container>
      <S.CountButton onClick={() => handleClick(change)} disabled={isDisabled.maximum()}>
        +
      </S.CountButton>
      <S.CurCount>{currentCount}</S.CurCount>
      <S.CountButton onClick={() => handleClick(change * -1)} disabled={isDisabled.minimum()}>
        -
      </S.CountButton>
    </S.Container>
  );
};

export default Counter;
