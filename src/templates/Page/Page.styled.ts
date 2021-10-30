import styled from 'styled-components';

export const Page = styled.div`
  ${({ theme }) => {
    return `
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      color: ${theme.colors.primary};

      #main-content {
        flex: 1;
      }
    `;
  }}
`;
