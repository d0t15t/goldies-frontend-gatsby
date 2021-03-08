import styled, {
  space,
  color,
  layout,
  border,
  background,
  position,
  flexbox,
  typography,
  variant,
  propTypes,
} from '~style'

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}
  ${flexbox}
  ${typography}
  ${variant}
`

Box.displayName = `Box`

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
  ...propTypes.flexbox,
  ...propTypes.typography,
  ...propTypes.variant,
}

export default Box
