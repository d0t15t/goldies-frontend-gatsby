import React from 'react'
import { Box, Text } from '~components/base'

const SearchResults = ({ results, getMenuItems }) => {
  return (
    <>
      <Text as="h6" pb={[4]} fontSize={[2]} fontStyle="italic">
        Search results
      </Text>
      <Box
        as="ul"
        css={`
          li {
            list-style: none;
            margin-bottom: 0;
          }
        `}
      >
        {getMenuItems(results)}
      </Box>
    </>
  )
}

export default SearchResults
