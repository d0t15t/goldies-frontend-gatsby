import React from 'react'
import { oneOfType, arrayOf, node, string, func } from 'prop-types'
import GoogleAnalytics from 'react-ga'
import { Link as GatsbyLink } from 'gatsby'

/**
 * remove the "internal:" prefix
 */
const cleanPath = _path => {
  return _path.replace(/^internal:/, '')
}

/**
 * adds a trailing slash
 * if there is no .(dot) in the last segment,
 * not starting with http:// or https://
 * until ? or #
 */
const trailingSlash = _path => {
  if (_path === '/') {
    return _path
  }

  // skip absolute paths
  let matches = _path.match(/^[[:alpha:]]*?:\/\//)
  if (matches && matches.length) {
    return _path
  }

  const sourcePath = cleanPath(_path)

  let urlPrefix = sourcePath
  let urlSuffix = ''

  // get url without fragment or params
  matches = sourcePath.match(/^[^?#]+/)
  if (matches && matches.length) {
    // eslint-disable-next-line prefer-destructuring
    urlPrefix = matches[0]
    urlSuffix = sourcePath.substring(urlPrefix.length, sourcePath.length)
  }

  // add slash if no file extension in last segment
  urlPrefix = urlPrefix.replace(/^(?:.*\/)?[^\/.]+$/, `$&/`)
  // linkPrefix = linkPrefix.replace(/^(?!https?\:\/\/.*$)(?:.*\/)?[^\/.]+?(?:(?=[#\?])|$)/, `$&/`)

  // rebuild url
  return urlPrefix + urlSuffix
}

const InBoundLink = ({ to, from, children, className, onClick }) => (
  <GatsbyLink
    to={trailingSlash(to)}
    className={className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${from}`,
        label: trailingSlash(to),
      })
      if (onClick) {
        onClick()
      }
    }}
  >
    {children}
  </GatsbyLink>
)

InBoundLink.propTypes = {
  to: string.isRequired,
  from: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  onClick: func,
}

InBoundLink.defaultProps = {
  className: ``,
  from: `unnamed link`,
  onClick: null,
}

export default InBoundLink
