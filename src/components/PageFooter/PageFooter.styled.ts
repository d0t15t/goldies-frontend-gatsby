import styled from 'styled-components';
import { Box } from '@mui/material';

export const Footer = styled(Box)(({ theme }) => {
  return {
    ...theme.typography.body2,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(5),
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        ${theme.palette.primary.light}
      )`,
    // minHeight: '600px',
    // marginTop: '25px',
    display: 'flex',

    '&& .MuiTypography-body1, .MuiListItemText-primary, p': {
      ...theme.typography.body2,
    },
  };
});

// export const Footer = styled(Box)`
//   ${({ theme }) => {
//     return `
//       min-height: 300px;
//       padding: ${theme.spacing(2)};
//       background-image: linear-gradient(
//         to bottom,
//         rgba(0, 0, 0, 0),
//         ${theme.palette.primary.main}
//       );
//       // display: flex;
//       // flex-direction: row;

//       // ${theme.breakpoints.up('sm')} {
//       //   flex-direction: column;
//       // }

//       > * {
//         // align-self: flex-end;
//       }

//     `;
//   }}
// `;

export const Inner = styled(Box)`
  ${({ theme }) => {
    return `
      max-width: ${theme.maxWidth};
      flex: 1;
      align-self: flex-end;
      margin: auto;
      
      h6 {
        font-size: 0.75rem;
        color: ${theme.palette.secondary.dark};
      }

      a, a:link, a:visited {
        color: ${theme.palette.primary.contrastText};
      }

      ul {
        padding-top: 0;
        // margin: 0;
      }

      .social-block {
        // display: flex;
        text-align: right;
        padding-top: ${theme.spacing(2)};
        padding-right: ${theme.spacing(2)};
        ul {
          // margin: auto;
        }
      }

      .menu-block {
        padding-left: ${theme.spacing(2)};

        + .menu-block {
          padding-top: ${theme.spacing(3)};

          ${theme.breakpoints.up('sm')} {
            padding-top: inherit;
          }
        }

        
      }

      ul li {
        padding: 0 0 0 ${theme.spacing(1)};
      }

      display: grid;
      grid-template-columns: 50% 50%;

      > :nth-child(1) {
        grid-area: 1/1/2/3
      }
      
      > :nth-child(3) {
        grid-area: 3/1/4/2
      }

      > :nth-child(4) {
        grid-row: 2/4;

        ul {
          // margin: auto;
        }
      }

      > :nth-child(5) {
        grid-area: 4/1/5/3
      }

      ${theme.breakpoints.up('sm')} {
        grid-template-columns: 33% 33% 33%;

        > :nth-child(1) {
          grid-area: 1/1/2/4;
        }
        > :nth-child(2) {
          grid-area: 2/1/3/2;
        }
        > :nth-child(3) {
          grid-area: 2/2/3/3;
        }
        > :nth-child(4) {
          grid-area: 2/3/3/3;
        }
        > :nth-child(5) {
          grid-area: 3/1/4/4
        }

        .social-block {
          display: flex;
          // flex-direction: column;
          // justify-content: center;
           
          ul {
            // margin: auto;
          }
        }
      }
      

      .identity {
        padding-top: ${theme.spacing(1)};
        text-align: center;
      }

      .peace {
        font-size: 1.5rem;
      }

      
    `;
  }}
`;

export const Lower = styled(Box)`
  ${({ theme }) => {
    return `
      > :nth-child(1) {
        // background: green;
      }

      > * {
        // align-self: flex-end;
      }
    `;
  }}
`;

export const Identity = styled.div`
  ${({ theme }) => {
    return `
      
    `;
  }}
`;
