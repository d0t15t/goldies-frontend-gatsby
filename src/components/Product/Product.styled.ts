import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/svg/gatsby.svg';

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

export const AddToCart = styled.button``;
