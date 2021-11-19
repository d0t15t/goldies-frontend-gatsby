// import styled from 'styled-components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Header = styled('header')``;
export const Headline = styled(Box)(({ theme }) => {
  return {
    // '& h1': {
    //   ...theme.typography.h1,
    // },
  };
});
export const Body = styled(Box)``;
