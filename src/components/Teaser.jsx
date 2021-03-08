import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BgImage } from '~components/Image'
import { Box, Text } from '~components/base'
import { Link } from '~components/Link'
import { themeGet } from '~style'

const Teaser = props => {
  const { title, subTitle, uri, image, teaserStyle, parentClass } = props
  const teaserClass = parentClass ? `${parentClass}--teaser` : 'teaser-element'
  const teaserClasses = classNames({
    [teaserClass]: true,
    [`${teaserClass}__${teaserStyle}`]: teaserStyle,
  })
  const TeaserContent = () => {
    const TeaserOverlay = () => (
      <Box
        className={`${teaserClass}-overlay transition-element`}
        css={`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${themeGet(
          'colorSchemes.default.overlay',
          'rgba(0, 0, 0, 0.6)'
        )};
        text-align: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
  
        > * {
          text-transform: uppercase;
          width: 100%;
          transition: color 400ms ease-in;
          opacity: 0.9;
          color: ${themeGet('colorSchemes.default.overlayText', '#ffffff')};
          font-style: italic;
        }
        &:hover {
          > * {
            color: ${themeGet('colorSchemes.default.highlight', 'yellow')};
            'rgba(0, 0, 0, 0.5)'
          }
        }
      `}
      >
        <Text as="h3">{title}</Text>
        <Text as="h4">{subTitle}</Text>
      </Box>
    )
    return (
      <>
        <BgImage
          className="teaser--background transition-element"
          fluid={image}
          height={['100%']}
        >
          <Text
            as="h4"
            className="visibly-hidden"
            aria-label={`${title} - page link`}
          />
        </BgImage>
        {teaserStyle === 'with_text' && <TeaserOverlay />}
      </>
    )
  }

  return (
    <Box
      className={teaserClasses}
      as="article"
      height={['100%']}
      css="position: relative"
    >
      {uri ? (
        <Link className="transition-element" to={uri} from="Product teaser">
          <TeaserContent />
        </Link>
      ) : (
        <TeaserContent />
      )}
    </Box>
  )
}

Teaser.propTypes = {
  image: PropTypes.PropTypes.shape({
    fluid: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
  }).isRequired,
  parentClass: PropTypes.string,
  subTitle: PropTypes.string,
  teaserStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string,
}

Teaser.defaultProps = {
  teaserStyle: 'default',
  subTitle: null,
  parentClass: null,
  uri: '/',
}

export default Teaser
