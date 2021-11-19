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
    `;
  }}
`;

export const Image = styled.img`
  max-width: 100px;
`;
