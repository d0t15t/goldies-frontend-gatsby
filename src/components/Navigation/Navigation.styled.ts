import styled from 'styled-components';
// ${({ theme }) => {
//   return `

//   `;
// }}
export const Container = styled.div`
  ${({ theme }) => {
    return `
      position: fixed;
      top: 0;
      left: 0;
      z-index: 998;
      display: flex;
      width: 100%;
      justify-content: space-between;
      // color: ${theme.colors.light};
  `;
  }}
`;

export const Unit = styled.span`
  display: flex;
  /* padding: 0.3em; */
`;
