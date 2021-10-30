import React, { FC } from 'react';
import * as CurrencyFormat from 'react-currency-format';
import * as S from './Price.styled';

interface PriceProps {
  displayType: string;
  prefix: string;
  thousandSeparator: true | string;
  value: number | string;
}

export const Price: FC<PriceProps> = (props) => {
  const { displayType, prefix, thousandSeparator, value } = props;
  const currencyProps = {
    ...props,
    displayType: displayType ?? 'text',
    thousandSeparator: thousandSeparator ?? true,
    prefix: prefix ?? '$',
    value,
  };
  return <CurrencyFormat {...currencyProps} />;
};

export default Price;
