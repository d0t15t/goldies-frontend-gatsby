import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  ${({ theme }) => {
    return `
      max-width: 324px;
      width: 100%;
      margin: auto;
      margin-bottom: ${theme.spacing(2)};

      &::before {
        content: '☟';
        display: block;
        text-align: center;
        font-size: 2em;
        padding-bottom: ${theme.spacing(2)};
        color: ${theme.palette.secondary.dark};
        color: ${theme.palette.grey[500]};
      }

      && h5, && h6 {
        font-size: 1.25rem;
        text-align: center;
        color: ${theme.palette.action.active};
        padding-bottom: ${theme.spacing(1)};
      }

      && h6 {
        font-size: .75rem;
        padding-bottom: ${theme.spacing(2)};
      }

      form {
        display: flex;
        justify-content: space-between;

        input {
          background: ${theme.palette.background.paper};
        }
          
      }
      padding-bottom: ${theme.spacing(5)};

      // ${theme.breakpoints.up('sm')} {
      //   padding-bottom: ${theme.spacing(4)};
      // }

    `;
  }}
`;
