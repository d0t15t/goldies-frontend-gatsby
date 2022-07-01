import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return `
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
