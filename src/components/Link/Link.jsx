import React from 'react'
import { arrayOf, bool, func, node, oneOfType, string } from 'prop-types'
import InBoundLink from './InBoundLink'
import OutBoundLink from './OutBoundLink'
import { urlIsExternal } from '~util'

const Link = props => {
  const { className, to, from, onClick, download, children } = props

  const attributes = { to, from, onClick, download, className }

  const isExternal = download || urlIsExternal(to)

  const LinkComponent = isExternal ? OutBoundLink : InBoundLink

  return <LinkComponent {...attributes}>{children}</LinkComponent>
}

const linkProps = {
  className: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
  download: bool,
  from: string,
  onClick: func,
  to: string.isRequired,
}

Link.propTypes = linkProps

Link.defaultProps = {
  className: null,
  download: null,
  from: null,
  onClick: null,
}

export default Link
