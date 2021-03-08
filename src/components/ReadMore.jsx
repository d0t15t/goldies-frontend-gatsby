import React from 'react'
import { arrayOf, node, oneOfType } from 'prop-types'
import { Text } from '~components/base'
import { css, themeGet } from '~style'

const ReadMore = ({ children, onClick }) => {
  return (
    <span>
      ...{' '}
      <button
        as="button"
        type="button"
        className="btn--no-style"
        onClick={onClick}
      >
        <Text
          as="small"
          css={`
            color: ${themeGet('colorSchemes.default.link', 'pink')};
          `}
        >
          {children || 'Read more'}
        </Text>
      </button>
    </span>
  )
}

ReadMore.propTypes = {
  children: oneOfType([arrayOf(node), node]),
}

ReadMore.defaultProps = {
  children: null,
}

export default ReadMore
