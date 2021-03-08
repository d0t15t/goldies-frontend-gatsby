// Global styles with example usage of ThemeProvider theme.
// Note: changes do not work with hot-reloader.

import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'
import { createGlobalStyle } from './index'
import 'bootstrap/dist/css/bootstrap.min.css'

const typography = new Typography(grandViewTheme)
typography.options.headerWeight = 200

const GlobalStyles = createGlobalStyle`

  ${typography.toString()}

  // Typography reset.

  // Apply color scheme.
  body
  {
    ${({ theme }) => {
      const { fontSizes, colorSchemes, space } = theme
      const colors = colorSchemes.default
      return `

        background-color: ${colors.background};
        color: ${colors.base};
        a, a:visited {
          color: ${colors.link};
          text-decoration: none;
        }
        a: hover {
          color: ${colors.highlight};
        }
        h1, h2, h3, h4, h5, h6 {
          // color: ${colors.highlight};
        }
        h1 {
          font-size: ${fontSizes[7]};
        }
        h2 {
          font-size: ${fontSizes[6]};
        }
        h3 {
          font-size: ${fontSizes[5]};
        }
        h4 {
          font-size: ${fontSizes[4]};
        }
        h5 {
          font-size: ${fontSizes[3]};
        }
        h6 {
          font-size: ${fontSizes[2]};
        }

      `
    }}
  }  

  img {
    margin-bottom: 0;
  }

  .center-x {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .center-y {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .hidden {
    visibility: hidden;
    height: 0;
    width: 0;
    position:relative;
  }
  
  .visually-hidden {
    visibility: hidden;
    opacity: 0;
  }

  button.btn--no-style {
    border: none !important;
    background-color: transparent !important;
    padding: 0px;
    margin: 0px;
  }

  .no-underline,
  .no-underline:hover {
    text-decoration: none;
  }

  .transition-element {
    // transition: all 400ms;
  }
  
  // @include reset-box-sizing;
  @include reset-lists;

  @keyframes wave {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 900px 0;
    }
  }

  ${({ theme }) => {
    const { colorSchemes } = theme
    const colors = colorSchemes.default

    return `
      .btn[variant=primary] {
        // background-color: ${colors.background};

      }
    `
  }}
`

export default GlobalStyles
