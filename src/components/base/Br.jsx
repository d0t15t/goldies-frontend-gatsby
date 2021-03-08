import styled, { display, space, propTypes } from '~style'

const Br = styled.br`
  ${display}
  ${space}
`

Br.displayName = `Br`

Br.defaultProps = {
  display: `block`,
}

Br.propTypes = {
  ...propTypes.display,
  ...propTypes.space,
}

export default Br
