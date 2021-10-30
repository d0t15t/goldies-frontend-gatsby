import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  .inner {
    display: flex;
  }
`;

export const ListItemCol = styled.div`
  ${({ theme }) => {
    return `
      button {
        svg {
          width: ${theme.iconSizes[1]}
        }
      }
    `;
  }}
`;

export const Image = styled.img`
  max-width: 100px;
`;
