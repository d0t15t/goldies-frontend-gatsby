import styled, { space, color, layout, propTypes } from '~style'

const Hr = styled.hr`
  margin: 0;
  padding: 0;
  ${space}
  ${color}
  ${layout}
`

Hr.displayName = `Hr`

Hr.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
}

export default Hr
