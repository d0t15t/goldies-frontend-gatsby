import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Box } from '~components/base'
import Stockists from './stockists'

const overviews = {
  stockists: Stockists,
  // paragraph__announcement: Announcement,
}

const getOverview = node => {
  if (Object.prototype.hasOwnProperty.call(overviews, node?.overview)) {
    const Component = overviews[node.overview]
    return <Component node={node} />
  }

  return node?.typeName ? (
    <p key="unknown-type">Unknown type {node.typeName}</p>
  ) : (
    <p key="overviews-error">Overview Error.</p>
  )
}

const Overview = ({ node }) => {
  return (
    <Box width={[5 / 6, 2 / 3]} mb={[null, 3]} m={['auto']} mt={['20px']}>
      {getOverview(node)}
    </Box>
  )
}

export default Overview
