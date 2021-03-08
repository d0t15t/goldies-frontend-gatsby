import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import PropTypes from 'prop-types'
import { Box } from '~components/base'
import { themeGet } from '~style'

const Breadcrumbs = ({ location, crumbLabel }) => {
  return (
    <Box
      css={`
        ol {
          display: flex;
          li + li {
            padding-left: ${themeGet('space.unit.base', '20px')};
          }
        }
      `}
    >
      <Breadcrumb location={location} crumbLabel={crumbLabel} />
    </Box>
  )
}

const hasBreadcrumb = path => {
  const list = ['/']
  return !list.includes(path)
}

Breadcrumbs.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  crumbLabel: PropTypes.string.isRequired,
}

export { Breadcrumbs, hasBreadcrumb }
