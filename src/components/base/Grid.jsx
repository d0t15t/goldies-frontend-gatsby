import styled, { grid, propTypes } from '~style'

import Box from './Box'

const Grid = styled(Box)`
  ${grid}
`

Grid.displayName = `Grid`

Grid.defaultProps = {
  display: `grid`,
}

Grid.propTypes = {
  ...propTypes.grid,
}

export default Grid
