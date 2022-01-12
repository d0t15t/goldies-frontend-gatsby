import styled from 'styled-components';
import { Box, SwipeableDrawer } from '@material-ui/core';

export const Drawer = styled(SwipeableDrawer)`
  ${({ theme }) => {
    return `
      .MuiDrawer-paper {
        

        ${theme.breakpoints.up('sm')} {
          width: inherit;
          min-width: 300px;
        }
      }
    `;
  }}
`;

export const Inner = styled(Box)`
  ${({ theme }) => {
    return `
      display: flex;
      flex-direction: column;
      justify-content: right;
      // align-items: flex-end;
      padding: ${theme.spacing(2)};

      ul {
        margin-top: ${theme.spacing(1)};

        li {
          padding: ${theme.spacing(0)};

          * {
            padding-bottom: 0;
            font-family: Libre Baskerville, serif;
          }
          a * {
            font-family: Nunito, sans serif;
          }
          a {
            padding: 0 0 ${theme.spacing(1)} ${theme.spacing(1)};
          }
        }
      }
    `;
  }}
`;
