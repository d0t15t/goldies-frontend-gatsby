/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { useWindowDimensions, getViewport } from '../util/index'

export const ThemeContext = React.createContext()
const Provider = props => {
  // const [loading, setLoading] = useState(false)
  // const [viewport, setViewport] = useState('default')
  // const { height, width } = useWindowDimensions()
  // useEffect(() => {
  //   setViewport(getViewport(height, width))
  // }, [height, width])
  return (
    <ThemeContext.Provider
      value={
        {
          // viewport,
          // changeViewport: viewportName => setViewport(viewportName),
          // loading,
          // setLoading: loadingValue => setLoading(loadingValue),
        }
      }
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
