import { arrayOf, node, oneOfType } from 'prop-types'
import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const drawersStatus = { left: false, right: false }

const initialState = {
  status: 'success', // 'wait', 'error'
  error: null,
  modalStatus: false,
  modalContent: null,
  modalHandleClose: null,
  drawersStatus,
}

export const Context = createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
}
