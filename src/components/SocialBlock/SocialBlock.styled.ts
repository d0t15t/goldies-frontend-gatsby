import styled from 'styled-components';

export const SocialItems = styled.ul`
  display: flex;
  flex-direction: column;
  ${({ theme }) => {
    return `
      > a {
        & + a {
          padding-top: ${theme.spacing(1)}
        }
      }

      ${theme.breakpoints.up('sm')} {
        flex-direction: row;
        > a {

          & + a {
            padding-top: ${theme.spacing(0)};
            padding-left: ${theme.spacing(1)}
          }
        }
      }
    `;
  }}
`;
export const Item = styled.li``;
