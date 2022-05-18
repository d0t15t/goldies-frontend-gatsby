import styled from 'styled-components';
import { Box, List, ListItem } from '@mui/material';

export const Wrapper = styled(List)`
  ${({ theme }) => {
    return `
      padding: ${theme.spacing(3)};
      // margin-top: ${theme.spacing(2)};
    `;
  }}
`;

export const Item = styled(ListItem)`
  ${({ theme }) => {
    return `
      display: flex;
      justify-content: center;
      gap: ${theme.spacing(2)};
      // width: 50%;

      > * {
        width: 50%;

        &:nth-child(1) {
          text-align: center;
        }
      }
    `;
  }}
`;
