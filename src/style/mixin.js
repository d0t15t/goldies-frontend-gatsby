/** @file mixin.js */

/**
 *
 * @param {*} colorScheme
 */
const hStyles = colorScheme => {
  let string = ``
  Array(6)
    .fill()
    .map((_, i) => {
      string += `
        h${i + 1} a, h${i + 1} a:visited {
          color: ${colorScheme.base};
        }
        h${i + 1} a:hover {
          color: ${colorScheme.link};
        }`
      return string
    })
  return string
}

const bodyStyles = colorScheme => {
  const string = `
    background-color: ${colorScheme.background};
    color: ${colorScheme.base};
    a, a:visited {
      color: ${colorScheme.link};
      text-decoration: none;
    }
    a: hover {
      color: ${colorScheme.highlight};
    }

    // @TODO: when resizing window, the transition is applied to most text
    // and the h1 headline, but not teaser h3 elements,
    // although the hover transition is applied...
    ${hStyles(colorScheme)}
  `
  return string
}

/**
 *
 * @param {Object} colorScheme
 */
const formStyles = colorScheme => {
  // console.log(colorScheme)
  return `
    .MuiInput-input {
      color: ${colorScheme.base}
    }
    .MuiInput-underline:before {
      border-bottom-color: ${colorScheme.base}
    }
    .Mui-checked {
      color: ${colorScheme.link}
    }
  `
}

/**
 * Optional style settings at breakpoints.
 *
 * @param {Object} colorSchemes
 * @param {Array} breakpoints
 */
const breakpointStyles = (colorSchemes, breakpoints) => {
  let string = ``
  Object.keys(breakpoints).map(breakpoint => {
    if (isNaN(breakpoint)) {
      string += `
        @media only screen and (min-width: ${breakpoints[breakpoint]}) {
          ${bodyStyles(colorSchemes[breakpoint])}
          ${formStyles(colorSchemes[breakpoint])}
      }`
      return string
    }
  })
  return string
}

/**
 *
 * @param {Object} colorScheme
 */
const bgStyles = colorScheme => {
  // return `background-color: ${colorScheme.background};`
}

export { bodyStyles, breakpointStyles, bgStyles }
