import React from 'react'
import { arrayOf, string, node, oneOfType } from 'prop-types'
import cls from 'classnames'

import { Box } from '~components/base'

const Region = props => {
  const { children, className, regionName } = props
  return (
    <Box
      className={cls({
        className,
        region: true,
        [`region--${regionName}`]: regionName,
      })}
      {...props}
      width="100%"
      height="100%"
    >
      {children}
    </Box>
  )
}

Region.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  className: string,
  regionName: string,
}

Region.defaultProps = {
  className: null,
  regionName: null,
}

export default Region
