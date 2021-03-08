/* eslint-disable camelcase */
import React from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import { Box } from '~components/base'
import { themeGet, theme } from '~style'
import Teaser from '~components/Teaser'

const TeasersTiles = ({ teasers }) => {
  const baseClassName = 'teasers-grid'

  const makeRowChunks = () => {
    if (!Array.isArray(teasers)) return null
    const teasersBlock = teasers.map(teaser => teaser)
    const rowChunks = [2, 3]
    let rowChunkIndex = 0
    let placedItemsCount = 0
    const sets = []
    const len = teasersBlock.length
    while (placedItemsCount < len) {
      const amount = rowChunks[rowChunkIndex]
      const chunk = teasersBlock.splice(0, amount)
      sets.push(chunk)
      placedItemsCount += amount
      rowChunkIndex =
        rowChunkIndex < rowChunks.length - 1 ? (rowChunkIndex += 1) : 0
    }
    return sets
  }

  const rows = makeRowChunks()
  const isEven = index => index % 2 === 0

  const teaserWidth = (teaserIndex, rowIndex) => {
    return isEven(rowIndex) ? [1, 1, 1 / 2] : [1, null]
  }
  const teaserHeight = (teaserIndex, rowIndex) => {
    const baseHeight = 300
    let h
    if (isEven(rowIndex)) {
      h = [baseHeight, baseHeight + 50, 400]
    } else {
      const maxHeight = 500
      if (teaserIndex > 0) {
        h = [baseHeight, baseHeight + 50, maxHeight / 2]
      } else {
        h = [baseHeight, baseHeight + 50, maxHeight]
      }
    }
    return h
  }

  return (
    <Box className={baseClassName} p={[2]}>
      {rows.map((row, rowIndex) => {
        const rowClassName = `${baseClassName}--row`
        const rowClassNames = `${rowClassName} ${rowClassName}__row-index-${rowIndex +
          1}`

        return (
          <Box
            className={rowClassNames}
            rowDisplayStyle={isEven(rowIndex) ? 'even' : 'odd'}
            key={uuid()}
            css={`
              width: 100%;
              display: block;
              @media only screen and (min-width: ${themeGet(
                  'breakpoints.md',
                  '968px'
                )}) {
                ${({ rowDisplayStyle }) =>
                  rowDisplayStyle === 'even'
                    ? `
                    display: flex;
                    flex-wrap: wrap;
                  `
                    : `
                    display: grid;
                    grid-template-columns: auto auto auto;
                    & > :nth-child(1) {
                      grid-column: 1 / 3;
		                  grid-row: 1 / 6;
                    }
                    & > :nth-child(2) {
                      grid-column: 3 / 4;
		                  grid-row: 1 / 2;
                    }
                    & > :nth-child(3) {
                      grid-column: 3 / 4;
		                  grid-row: 2 / 4;
                    }
                    `}
              }
            `}
          >
            {Object(row).map((teaser, teaserIndex) => {
              return (
                <Box
                  className={`${baseClassName}--teaser-wrapper`}
                  key={uuid()}
                  width={teaserWidth(teaserIndex, rowIndex)}
                  height={teaserHeight(teaserIndex, rowIndex)}
                  p={[2]}
                >
                  <Teaser {...teaser} />
                </Box>
              )
            })}
          </Box>
        )
      })}
    </Box>
  )
}

TeasersTiles.propTypes = {
  teasers: PropTypes.arrayOf(Teaser).isRequired,
}

export default TeasersTiles
