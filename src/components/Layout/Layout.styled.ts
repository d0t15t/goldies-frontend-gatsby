// import styled from 'styled-components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Layout = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    '& h1': {
      ...theme.typography.h1,
    },
    '& h2': {
      ...theme.typography.h2,
    },
    '& h3': {
      ...theme.typography.h3,
    },
    '& h4': {
      ...theme.typography.h4,
    },
    '& h5': {
      ...theme.typography.h5,
    },
    '& h6': {
      ...theme.typography.h6,
    },
    '& .body1': {
      ...theme.typography.body1,
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
