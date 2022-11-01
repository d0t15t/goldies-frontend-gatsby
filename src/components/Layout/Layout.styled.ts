// import styled from 'styled-components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Layout = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    maxWidth: '100%',

    '& h1': {
      ...theme.typography.h1,
      fontSize: '2rem',
    },
    '& h2': {
      ...theme.typography.h2,
      fontSize: '1.5rem',
      lineHeight: '2.5rem',
      paddingBottom: theme.spacing(2),
    },
    '& h3': {
      ...theme.typography.h3,
      fontSize: '1.1rem',
      lineHeight: '2.5rem',
    },
    '& h4': {
      ...theme.typography.h4,
      fontSize: '1.1rem',
      lineHeight: '2.5rem',
    },
    '& h5': {
      ...theme.typography.h5,
    },
    '& h6': {
      ...theme.typography.h6,
    },
    '& .body1': {
      ...theme.typography.body1,
      // lineHeight:
    },
    '& .body2': {
      ...theme.typography.body2,
    },
    '&&': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',

      '& .page-root': {
        flexGrow: 1,
      },
    },
  };
});
