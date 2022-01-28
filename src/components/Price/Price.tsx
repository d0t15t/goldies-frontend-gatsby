import React, { FC } from 'react';
import * as CurrencyFormat from 'react-currency-format';
import cls from 'classnames';
import * as S from './Price.styled';

interface PriceProps {
  displayType: string;
  prefix: string;
  thousandSeparator: true | string;
  value: number | string;
}

export const Price: FC<PriceProps> = ({ displayType, prefix, thousandSeparator, value }) => {
  const sanitizeValue = (val) => {
    return val.replace('.00', '');
  };
  const currencyProps = {
    // ...props,
    displayType: displayType ?? 'text',
    thousandSeparator: thousandSeparator ?? true,
    prefix: prefix ?? '$',
    value: sanitizeValue(value),
  };
  return (
    <S.Price className="price">
      <CurrencyFormat {...currencyProps} className={cls('price-element')} />
    </S.Price>
  );
};

export default Price;
