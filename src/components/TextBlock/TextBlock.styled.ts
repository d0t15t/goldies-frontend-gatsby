import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return `
      text-align: center;
      padding: ${theme.spacing(6)};
      color: ${theme.palette.primary.dark};

      & + .text-block--wrapper {
        padding-top: 0;
      }
      
      hr {
        border: 1px solid ${theme.palette.secondary.light};
        margin-top: ${theme.spacing(2)};
      }

      ${theme.breakpoints.up('md')} {
        padding: ${theme.spacing(6)} ${theme.spacing(8)};
      }

    `;
  }}
`;
