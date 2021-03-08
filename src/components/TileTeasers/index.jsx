/* eslint-disable camelcase */
import React from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import { BgImage } from '~components/Image'
import { Link } from '~components/Link'
import { Flex, Box, Text } from '~components/base'
import styled, { themeGet } from '~style'
import { extractQueryImage } from '~util'

// console.log(data)

const TileTeasers = ({ blocks }) => {
  const { relationships } = blocks
  const { field_teasers } = relationships

  const makeRowChunks = () => {
    const rowChunks = [2, 3]
    let rowChunkIndex = 0
    let placedItemsCount = 0
    const sets = []
    const len = field_teasers.length
    while (placedItemsCount < len) {
      const amount = rowChunks[rowChunkIndex]
      const chunk = field_teasers.splice(0, amount)
      sets.push(chunk)
      placedItemsCount += amount
      rowChunkIndex = rowChunkIndex < amount ? rowChunkIndex + 1 : 0
    }
    return sets
  }

  const chunks = makeRowChunks()

  const Row = styled(Box)`
    // + li {
    //   padding-left: ${themeGet('space.unit.base', '13px')};
    // }
    border: 1px solid;
    border-color: ${themeGet('colorSchemes.default.base_contrast', '#f00000')};
  `

  const Teaser = ({ title, path, image }) => {
    return (
      <Box as="article" height={['100%']}>
        <Link to={path} from="Product teaser">
          <BgImage fluid={image} height={['100%']}>
            <Text as="h4" className="visibly-hidden">
              {title}
            </Text>
          </BgImage>
        </Link>
      </Box>
    )
  }
  const TeaserRow = ({ children }) => {
    return <Box className="teaser-row">{children}</Box>
  }

  const teaserWidth = index => {
    let w
    switch (index) {
      case 2:
        w = [1, 2 / 3]
        break
      case 3:
        w = [1, 1 / 3]
        break
      default:
        w = [1, 1 / 2]
        break
    }
    return w
  }
  const teaserHeight = index => {
    let h
    switch (index) {
      case 2:
        h = [200, 250, 500]
        break
      case 3:
      case 4:
        h = [200, 250, 250]
        break
      default:
        h = [200, 250, 350]
        break
    }
    return h
  }
  const gridStyles = index => {
    let styles
    switch (index) {
      case 1:
        break

      default:
        break
    }
  }
  return (
    <Box className="tiled-teasers" css="grid-template-columns: 100px ">
      {Object(field_teasers).map((teaser, index) => {
        const { field_headline, field_teaser_type, relationships } = teaser
        const {
          field_collection,
          field_product,
          field_page,
          field_media,
        } = relationships
        const imageData = extractQueryImage(field_media[0] || field_media)
        let childNode
        switch (field_teaser_type) {
          case 'product':
            childNode = field_product
            break
          case 'page':
            childNode = field_page
            break
          default:
            childNode = field_collection
            break
        }
        const { path } = childNode
        const { alias } = path

        return (
          <Box
            className="teaser-wrapper"
            key={uuid()}
            width={teaserWidth(index)}
            // p={[2]}
            height={teaserHeight(index)}
          >
            {index && <p>somthing</p>}
            <Teaser title={field_headline} path={alias} image={imageData} />
          </Box>
        )
      })}
    </Box>
  )
}

export default TileTeasers
