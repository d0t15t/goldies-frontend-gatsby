import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => {
    const { theme } = props;

    return `
      position: fixed;
      min-height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      padding: ${theme.margins[5]};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
  }}
`;
