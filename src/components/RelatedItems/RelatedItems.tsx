/* eslint-disable react/no-danger */
import React, { FC, useState } from 'react';
import cls from 'classnames';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Link,
} from '~components/index';

import * as U from '~utils';
import * as S from './RelatedItems.styled';

export const Related = ({ items }) => {
  
  return items ? (
    <S.RelatedItems className={cls(`product--related-items`)}>
      <Typography variant="h6">Find related products in:</Typography>
      <Box as="ul" className={cls(`product--related-items--set`)}>
        {items.map((itemSet, i) => {
          return itemSet.items.length ? (
            <li key={itemSet.label}>
              <Typography variant="body2" className={cls({'visually-hidden': i === 0})}>{itemSet.label}</Typography>
              <ul className={cls(`product--related-items--set-items`)}>
                {itemSet.items.map((subItem) => {
                  return (
                    <li key={subItem.id}>
                      <Link to={subItem?.path?.alias}>
                        <Typography variant="h5">{subItem.title}</Typography>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : null;
        })}
      </Box>
    </S.RelatedItems>
  ) : null;
};

export default Related;
