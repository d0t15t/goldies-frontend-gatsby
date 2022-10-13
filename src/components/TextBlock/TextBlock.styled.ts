import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    return `
      text-align: center;
      padding: ${theme.spacing(6)};
      color: ${theme.palette.primary.dark};

      ${theme.breakpoints.up('md')} {
        padding: ${theme.spacing(6)} ${theme.spacing(8)};
      }

      h3 {
        font-size: 2rem;
        line-height: 3.5rem;
      }

    `;
  }}
`;
