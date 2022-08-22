import styled from 'styled-components';
import { Box } from '@mui/material';

export const Wrapper = styled('ul')`
  ${({ theme }) => {
    return `
      list-style: none;
      text-align: center;

      a {
        transition: color 100ms linear;

        &:hover {
          color: ${theme.palette.primary.main};
        }
      }
    `;
  }}
`;

