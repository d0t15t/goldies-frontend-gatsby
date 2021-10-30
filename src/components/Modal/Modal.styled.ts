import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  // height: 75vh;
  margin: auto;
  font-size: 2em;
  position: relative;
  background-color: white;
`;

export const CloseButtonWrapper = styled.div`
  ${(props) => {
    const { theme, position } = props;

    return `
      position: absolute;
      left: ${position?.left + 'px' ?? '0'};
      top: ${position?.top + 'px' ?? '0'};
      width: ${theme.iconSizes[2]};
      height: ${theme.iconSizes[2]};
      
      button {
        width: 100%;
      }
  `;
  }}
`;

// export const buttonStyles = `
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   &: hover {
//     path {
//       color: gold;
//     }
//   }
// `;

export const Inner = styled.div`
  padding: 2em;
  max-width: 100%;
  width: 100%;

  .swiper {
    margin: auto;
    width: 100%;
  }

  ${(props) => {
    const { theme } = props;
    return `
      a {
        color: ${theme.colors.secondary};
      }
    `;
  }}
`;

// export const ModalClose = styled.div`
//   margin-left: -1em;
//   margin-top: -1em;
//   cursor: pointer;
// `;
