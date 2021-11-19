import styled from 'styled-components';

export const Page = styled.div`
  ${({ theme }) => {
    // console.log('🚀 ~ file: Page.styled.ts ~ line 16 ~ theme', theme);
    return `
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      color: ${theme.palette.primary};

      #main-content {
        flex: 1;
      }
    `;
  }}
`;
