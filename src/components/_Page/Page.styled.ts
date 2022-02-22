import styled from 'styled-components';
import { Box } from '@mui/material';

export const Page = styled(Box)`
  ${({ theme }) => {
    return `

      margin: auto;
      max-width: 100%;

      ${theme.breakpoints.up('sm')} {
        padding-left: ${theme.spacing(5)};
        padding-right: ${theme.spacing(5)};
      }
        
      ${theme.breakpoints.up('md')} {
        padding-left: ${theme.spacing(3)};
        padding-right: ${theme.spacing(3)};
        max-width: ${theme.maxWidth};
      }
      
    `;
  }}
`;

export const PageBreak = styled(Box)`
  ${({ theme }) => {
    return `
      font-size: 1.5em;
      z-index: 999;
      display: flex;
      justify-content: right;
      padding-right: ${theme.spacing(1)};
      opacity: 1;
      transition: opacity 1s ease-out;

      &.hidden {
        opacity: 0;
      }
    `;
  }}
`;
