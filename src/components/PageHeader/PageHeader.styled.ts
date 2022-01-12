import styled from 'styled-components';
// import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Header = styled('header')(({ theme }) => {
  return {
    overflow: 'hidden',
    textAlign: 'center',
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(1),
    // padding: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    // [theme.breakpoints.up('md')]: {
    //   marginTop: theme.spacing(4),
    //   marginBottom: theme.spacing(2),
    // },

    '& > *': {},
    '& h1': {
      fontSize: '1.5rem',
      marginBottom: theme.spacing(1),

      [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    '& p': {
      fontStyle: 'italic,',
      color: theme.palette.text.secondary,
      margin: 'unset',
      marginBottom: theme.spacing(1),

      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2),
      },
    },
    '& h2': {
      margin: 'unset',
      fontSize: '1.5rem',
      marginBottom: theme.spacing(1),
      fontStyle: 'italic',
      // color: theme.palette.secondary.light,
    },
  };
});

export const Headline = styled(Box)(({ theme }) => {
  return {
    '& h1': {
      // fontFamily: 'Great Vibes, cursive',
      fontSize: '3rem',
    },
    '& h2': {
      // fontFamily: 'Great Vibes, cursive',
      fontSize: '2rem',
    },
  };
});

export const Body = styled(Box)``;
