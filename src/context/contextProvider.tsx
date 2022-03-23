import React, { createContext, useReducer } from 'react';
import Reducer from './contextReducer';

const drawersStatus = { left: false, right: false };

const initialState = {
  error: null,
  // status: 'success', // 'wait', 'error'
  modalIsOpen: false,
  modalContent: null,
  modalStyle: null,
  currentSearchInput: '',
  pageDimensions: {},
  currentPage: null,
  // modalId: 0,
  // modalContent: null,
  // modalHandleClose: null,
  // drawersIsOpen: true,
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

// export default ({ element }) => <ModalProvider>{element}</ModalProvider>;
