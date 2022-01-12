import styled from 'styled-components';

export const Container = styled.div``;

export const Headline = styled.h3`
  color: pink;
`;

export const Body = styled.p`
  /* color: yellow; */
`;

export const Controls = styled.div``;

export const ControlsInner = styled.div`
  ${({ theme }) => {
    return `
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.spacing(2)};
    `;
  }}
`;
