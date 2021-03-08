import styled, {
  space,
  color,
  layout,
  border,
  background,
  position,
  flexbox,
  variant,
  propTypes,
} from '~style'

const Input = styled.input`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}
  ${flexbox}
  ${variant}
`

Input.displayName = `Input`

Input.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
  ...propTypes.flexbox,
  ...propTypes.variant,
}

export default Input
