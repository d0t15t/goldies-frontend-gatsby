import React, { useState } from 'react'
import uuid from 'react-uuid'
import { arrayOf, shape } from 'prop-types'
import { textAlign } from 'styled-system'
import { Flex, Box, Text } from '~components/base'
import { Image } from '~components/Image'
import { theme, themeGet, css } from '~style'
import { Link } from '~components/Link'
import AddToCart from '~components/AddToCart'

const baseClassName = 'tiled-grid'
const teaserClassName = `${baseClassName}--teaser`

const Teaser = props => {
  const { title, text, weight, uri, image, price, variantId } = props
  const colors = theme.colorSchemes.default
  const [isShown, setIsShown] = useState(0)

  return (
    <Box
      className={teaserClassName}
      width={[1, 1 / 2, 1 / 2, 1 / 3]}
      p={[2]}
      pb={[4]}
      onMouseEnter={() => setIsShown(1)}
      onMouseLeave={() => setIsShown(0)}
    >
      <Box css="position: relative;">
        <Link to={uri}>
          <Image
            fluid={image}
            width={[1]}
            css="box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.35), -1px -1px 3px 0px rgba(0,0,0,0.2), -1px 1px 3px 0px rgba(0,0,0,0.2), 1px -1px 3px 0px rgba(0,0,0,0.2);"
          />
        </Link>
        <Box
          textAlign={['center']}
          css={`
            position: absolute;
            bottom: 5px;
            right: 5px;
            transition: opacity 300ms;
            opacity: 0;

            @media (min-width: ${themeGet('breakpoints.md', '768px')}) {
              opacity: ${isShown};
            }

            button {
              border: 1px solid gold;
            }
          `}
        >
          <AddToCart
            variantId={variantId}
            productName={title}
            color="light"
            buttonTitle="+ Quick add"
          />
        </Box>
      </Box>
      <Link to={uri} className="no-underline">
        <Text
          as="h4"
          fontSize={[3]}
          p={[3]}
          pb={[1]}
          // css={[`font-style: italic;`]}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          as="em"
          textAlign={['center']}
          css={`
            display: block;
          `}
          fontSize={[1]}
          color={[colors.grey]}
        >
          {text && 'starting from:'}
        </Text>
        <Text
          as="em"
          textAlign={['center']}
          color={[colors.link_no_contrast]}
          css={`
            display: block;
            font-weight: 200;
            letter-spacing: 1px;
          `}
        >
          {weight} ~ <strong>${price}</strong>
        </Text>
      </Link>

      <Text
        as="em"
        // mt={[2]}
        fontSize={1}
        textAlign={['center']}
        css={`
          display: block;
        `}
        color={[colors.grey]}
      >
        {text}
      </Text>
    </Box>
  )
}

const TeasersGrid = ({ teasers }) => {
  return (
    <Flex className={baseClassName} mt={[3]} flexWrap="wrap">
      {teasers.map((teaser, n) => {
        return <Teaser {...teaser} key={uuid()} index={n} />
      })}
    </Flex>
  )
}

TeasersGrid.propTypes = {
  teasers: arrayOf(shape({})).isRequired,
}

export default TeasersGrid
