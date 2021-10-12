import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 75vh;
  margin: auto;
  font-size: 2em;
  position: relative;
  background-color: white;
`;

export const buttonStyles = `
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  &: hover {
    path {
      color: gold;
    }
  }
`;

export const Inner = styled.div`
  padding: 2em;
  max-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  display: grid;

  .swiper {
    margin: auto;
    width: 100%;
    // max-width: 100%;
  }

  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;

  button {
    margin: auto;
    width: 100%;
  }
  .swiper-wrapper {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
  }
`;

// export const ModalClose = styled.div`
//   margin-left: -1em;
//   margin-top: -1em;
//   cursor: pointer;
// `;
