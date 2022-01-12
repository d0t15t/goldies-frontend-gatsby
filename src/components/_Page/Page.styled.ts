import styled from 'styled-components';
import { Box } from '@mui/material';

export const Page = styled(Box)`
  ${({ theme }) => {
    return `
      color: ${theme.palette.primary};
      max-width: ${theme.maxWidth};
      margin: auto;
      padding: ${theme.spacing(2)};
      padding-top: ${theme.spacing(3)};
        
      ${theme.breakpoints.up('md')} {
        padding-left: ${theme.spacing(3)};
        padding-right: ${theme.spacing(3)};
      }
      
    `;
  }}
`;
