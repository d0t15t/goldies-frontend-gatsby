/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['576px', '768px', '992px', '1200px']

//  Aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '32px',
  '64px',
  '128px',
  '256px',
  '512px',
]

space.unit = {
  base: space[2],
  small: space[1],
  margin: space[3],
  large: space[4],
  border: {
    default: 12,
  },
  maxWidth: '1276px',
}

const teaserHeight = ['0', '150px', '300px', '500px']
teaserHeight.sm = teaserHeight[1]
teaserHeight.md = teaserHeight[2]
teaserHeight.lg = teaserHeight[3]

/**
 * Typographic scale
 */
const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = ['0', '2px', '4px', '8px', '16px']

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  pageBackground: 'hsl(228, 33%, 97%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  blue: {
    100: 'hsl(223, 88%, 97%)',
    200: 'hsl(223, 72%, 90%)',
    300: 'hsl(223, 71%, 76%)',
    400: 'hsl(227, 63%, 67%)',
    500: 'hsl(230, 65%, 63%)',
    600: 'hsl(230, 52%, 53%)',
    700: 'hsl(230, 51%, 43%)',
    800: 'hsl(230, 57%, 34%)',
    900: 'hsl(231, 55%, 28%)',
  },
  grey: {
    100: 'hsl(210, 17%, 98%)',
    200: 'hsl(207, 22%, 90%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
  red: {
    100: 'hsl(360, 77%, 95%)',
    200: 'hsl(360, 79%, 81%)',
    300: 'hsl(360, 71%, 73%)',
    400: 'hsl(360, 70%, 64%)',
    500: 'hsl(360, 71%, 53%)',
    600: 'hsl(360, 65%, 45%)',
    700: 'hsl(360, 61%, 38%)',
    800: 'hsl(360, 63%, 31%)',
    900: 'hsl(360, 60%, 24%)',
  },
  yellow: {
    100: 'hsl(44, 100%, 98%)',
    200: 'hsl(44, 90%, 92%)',
    300: 'hsl(45, 86%, 86%)',
    400: 'hsl(44, 90%, 80%)',
    500: 'hsl(43, 87%, 67%)',
    600: 'hsl(44, 57%, 52%)',
    700: 'hsl(43, 59%, 42%)',
    800: 'hsl(43, 64%, 34%)',
    900: 'hsl(44, 66%, 22%)',
  },
  green: {
    100: 'hsl(142, 81%, 94%)',
    200: 'hsl(141, 67%, 80%)',
    300: 'hsl(145, 65%, 68%)',
    400: 'hsl(146, 57%, 65%)',
    500: 'hsl(145, 55%, 49%)',
    600: 'hsl(145, 55%, 41%)',
    700: 'hsl(145, 59%, 33%)',
    800: 'hsl(155, 63%, 26%)',
    900: 'hsl(156, 61%, 20%)',
  },
}

const defaultColorScheme = {
  base: colors.black,
  grey: '#aaaaaa',
  link: colors.blue[500],
  link_no_contrast: colors.black,
  base_contrast: colors.blue[500],
  highlight: colors.yellow[500],
  background: colors.pageBackground,
  overlay: 'hsl(0, 0%, 0%, 0.6)',
  overlayText: colors.pageBackground,
}

const colorSchemes = {
  default: { ...defaultColorScheme },
}

const buttons = {
  primary: {
    color: 'white',
    backgroundColor: colors.blue[600],
  },
  secondary: {
    color: 'white',
    backgroundColor: colors.green[600],
  },
  danger: {
    color: 'white',
    backgroundColor: colors.red[800],
  },
}
const buttonSizes = {
  medium: {
    fontSize: fontSizes[2],
    padding: `8px 16px`,
    borderRadius: radii[2],
  },
  large: {
    fontSize: fontSizes[3],
    padding: `12px 24px`,
    borderRadius: radii[3],
  },
}

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  colorSchemes,
  space,
  teaserHeight,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  buttons,
  buttonSizes,
}
