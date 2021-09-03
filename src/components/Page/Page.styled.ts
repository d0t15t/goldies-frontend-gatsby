import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(1rem + 2vmin);
  font-family: sans-serif;
  color: white;
`;

export const Title = styled.h1``;
