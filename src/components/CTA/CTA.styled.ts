import styled from 'styled-components';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    '&& a, a:link, a:visited': {
      color: theme.palette.secondary.contrastText,
    },
  };
});

export const Inner = styled(Box)(({ theme }) => {
  return {
    maxWidth: theme.maxWidth,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(1),

    '&& > *': {
      paddingRight: theme.spacing(1),
      lineHeight: 2,
    },

    // [theme.breakpoints.up('sm')]: {
    //   display: 'flex',
    //   justifyContent: 'space-around',
    //   textAlign: 'inherit',
    // },
  };
});
