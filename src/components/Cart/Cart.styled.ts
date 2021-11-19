import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return `
      .cart-item {
        padding: ${theme.spacing(3)};
      }
    `;
  }}
`;

export const List = styled.ul``;

export const PaymentMethods = styled.div`
  ul {
    display: flex;
  }
`;
