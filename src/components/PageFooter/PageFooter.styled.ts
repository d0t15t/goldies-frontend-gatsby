import styled from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => {
    return `
      display: flex;
      flex-direction: column;
      min-height: 300px;
      // padding: ${theme.spacing[4]};
      text-align: center;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        ${theme.palette.secondary.dark},
        gold
      );
    `;
  }}
`;

export const Lower = styled.div`
  ${({ theme }) => {
    return `
      flex: 1;
      display: flex;
      justify-content: space-between;

      > * {
        align-self: flex-end;
      }
    `;
  }}
`;

export const Identity = styled.div`
  ${({ theme }) => {
    return `
      
    `;
  }}
`;
