import * as styledComponents from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import { variant } from 'styled-system'
import { theme } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents

export {
  css,
  variant,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme,
  themeGet,
  propTypes,
}
export * from 'styled-system'
export default styled
