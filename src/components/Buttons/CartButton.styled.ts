// import { styled } from '@mui/system';
import styled from 'styled-components';
import { IconButton, Typography } from '@mui/material';
//import { Cart, Link } from '~components';


export const Wrapper = styled('span')`
  display: flex;
  align-items: stretch;

  > a, a:link, a:visited {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
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
  }
`;
