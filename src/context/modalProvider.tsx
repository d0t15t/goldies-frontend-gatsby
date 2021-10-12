import React, { createContext, useReducer } from 'react';
import Reducer from './modalReducer';

const drawersStatus = { left: false, right: false };

const initialState = {
  error: null,
  // status: 'success', // 'wait', 'error'
  modalIsOpen: false,
  modalNodes: null,
  // modalId: 0,
  // modalContent: null,
  // modalHandleClose: null,
  // drawersStatus,
};

export const ModalContext = createContext(initialState);

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <ModalContext.Provider value={[state, dispatch]}>{children}</ModalContext.Provider>;
};

// export default ({ element }) => <ModalProvider>{element}</ModalProvider>;
