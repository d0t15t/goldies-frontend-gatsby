import React, { FC } from 'react';
import cls from 'classnames';
import { Typography, Box } from '@mui/material';
import { Image, Link } from '~components/index';
import * as S from './Teaser.styled';

export const TeaserSimple = ({ title, path }) => {
  return (
    <Typography variant="h5">
      <Link to={ path.alias }>{ title }</Link>
    </Typography>
  );
} 
