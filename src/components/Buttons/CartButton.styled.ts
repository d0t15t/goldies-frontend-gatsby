import styled from 'styled-components';

export const Container = styled.span`
  > * {
    display: flex;
  }
`;

export const Count = styled.span`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  padding: 10px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  text-align: center;
`;

export const Cart = styled.div`
  ${({ theme }) => {
    return `
      background: ${theme.colors.light};
      width: 300px;
      position: absolute;
      top: 50px;
      right: 0;
      z-index: 995;
      padding: ${theme.margins[2]};
    `;
  }}
`;
