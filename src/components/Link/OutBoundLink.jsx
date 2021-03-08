import React from 'react'
import { oneOfType, arrayOf, node, string, bool, func } from 'prop-types'
import GoogleAnalytics from 'react-ga'

const OutBoundLink = ({
  to,
  from,
  target,
  download,
  children,
  className,
  onClick,
}) => {
  return (
    <a
      href={to}
      target={target}
      className={className}
      rel="noopener"
      download={download}
      onClick={() => {
        GoogleAnalytics.event({
          category: 'Outbound Link',
          action: `[clicked] ${from}`,
          label: to,
        })
        if (onClick) {
          onClick()
        }
      }}
    >
      {children}
    </a>
  )
}

OutBoundLink.propTypes = {
  to: string.isRequired,
  from: string.isRequired,
  download: bool,
  target: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
  className: string,
  onClick: func,
}

OutBoundLink.defaultProps = {
  target: `_blank`,
  download: false,
  className: ``,
  onClick: null,
}

export default OutBoundLink
