import styled from 'styled-components';

export const SocialItems = styled.ul`
    ${({ theme }) => {
    return `
      display: flex;
      flex-direction: column;
      margin-left: ${theme.spacing(4)} !important;

      > a {
        & + a {
          margin-top: ${theme.spacing(1)}
        }
      }

      ${theme.breakpoints.up('sm')} {
        flex-direction: row;
        > a {

          & + a {
            margin-top: ${theme.spacing(0)};
            margin-left: ${theme.spacing(1)}
          }
        }
      }
    `;
  }}
`;
export const Item = styled.li``;
