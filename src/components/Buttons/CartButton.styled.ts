// import { styled } from '@mui/system';
import styled from 'styled-components';
import { IconButton, Typography } from '@mui/material';

export const CartButton = styled('span')`
  > * {
    display: flex;
  }
`;

export const Count = styled(Typography)`
  border-radius: 50%;
  text-align: center;
  background-color: white;
  height: ${({ theme }) => theme.spacing(3)};
  width: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  position: relative;

  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    margin-top: -1.5px;
  }
`;
