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
      padding: ${theme.spacing(2)};
    `;
  }}
`;

export const MenuWrapper = styled(Box)`
  ${({ theme }) => {
    return `
      padding-top: ${theme.spacing(2)};

      ul {
        padding-bottom: 0;
      }

      > ul > li {
        padding-left: ${theme.spacing(2)};
  
        & > a {
          font-style: italic;
          font-size: 1.2em;
        }

        & > ul {
          padding-left: ${theme.spacing(1)};

          & > li {
            padding-bottom: ${theme.spacing(1)};
          }
        }

        & + li::before {
          display: block;
          content: '~';
          padding-bottom: ${theme.spacing(1)};
          color: ${theme.palette.secondary.dark};
        }
      }

      a, a:link, a:visted {
        font-size: 1.4rem;
        
        &::hover {
          color: ${theme.palette.primary.main};
        }
      }

      .MuiListItemText-root {
        margin: 0;
      }
  `;
  }}
`;
