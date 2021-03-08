import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from '~components/base'
import { Link } from '~components/Link'
import { Image } from '~components/Image'
import { themeGet } from '~style'

const Teaser = props => {
  const { title, image, path, alt, css, textTag, padding, children } = props
  return (
    <Box as="article" className="teaser" css={css} p={padding}>
      {image ? (
        <Box mb={[1]}>
          <Link to={path}>
            <Image fluid={image} alt={alt} />
          </Link>
        </Box>
      ) : null}
      <Text as={textTag || 'h4'} mb={[2]}>
        <Link to={path}>{title}</Link>
      </Text>
      {children}
    </Box>
  )
}
// Teaser.propTypes = {
//   title: PropTypes.string.isRequired,
//   path: PropTypes.string,
//   image: PropTypes.objectOf(PropTypes.any),
//   alt: PropTypes.string,
//   padding: PropTypes.number,
//   css: PropTypes.string,
//   children: PropTypes.array(),
// }
// Teaser.defaultProps = {
//   path: null,
//   alt: 'Image',
//   image: null,
//   padding: null,
//   css: null,
//   children: null,
// }
export default Teaser
