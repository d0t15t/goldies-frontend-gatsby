import styled from 'styled-components';
// import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Header = styled('header')(({ theme }) => {
  return {
    textAlign: 'center',

    padding: theme.spacing(2),

    '& > *': {},
    '& h1': {
      fontSize: '1.5em',
      marginBottom: theme.spacing(1),
      lineHeight: '1.5em',

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
        // marginBottom: theme.spacing(2),
      },
    },
    '& h2': {
      margin: 'unset',
      fontSize: '1.5rem',
      paddingBottom: 0,
      // marginBottom: theme.spacing(1),
      fontStyle: 'italic',
      // color: theme.palette.secondary.light,
    },
    '&.page-header--shifted': {
      fontSize: 0,
      width: '1px',
      height: '1px',
      display: 'inline-block',
      overflow: 'hidden',
      position: 'absolute!important',
      border: '0!important',
      padding: '0!important',
      margin: '0!important',
      clip: 'rect(1px,1px,1px,1px)',
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

export const Body = styled(Box)`
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
