import styled from 'styled-components';

export const Counter = styled('div')`
  ${({ theme }) => {
    return `
      
      button {
        &:hover {
          color: ${theme.palette.primary.main};
        }
      }

    `;
  }}
`;
