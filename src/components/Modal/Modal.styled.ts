import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

export const Inner = styled.div`
  width: 75%;
  background-color: white;
  margin: auto;
  padding: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
`;

export const ModalClose = styled.div`
  margin-left: -1em;
  margin-top: -1em;
`;
