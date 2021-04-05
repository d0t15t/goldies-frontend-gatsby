import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { node } from 'prop-types'
import { Box, Flex, Text } from '~components/base'
import { Link } from '~components/Link'

const Stockist = ({ children, address, link, image }) => {
  console.log(
    '🚀 ~ file: stockists.jsx ~ line 8 ~ Stockist ~ children',
    children
  )
  const item = (
    <Box as="article">
      <Text as="h5">{children}</Text>
      <Box>{address}</Box>
      {image}
    </Box>
  )
  return link ? <Link to={link}>{children}</Link> : <>{children}</>
}

const Stockists = props => {
  const { allStockists } = useStaticQuery(graphql`
    query stockistsQuery {
      allStockists: allNodeStockist {
        nodes {
          title
          id
          address: field_address {
            address_line1
            country_code
            locality
            postal_code
            organization
            langcode
            administrative_area
            address_line2
          }
          link: field_link {
            uri
          }
        }
      }
    }
  `)

  const getItems = nodes => {
    return nodes.map(node => {
      console.log('🚀 ~ file: stockists.jsx ~ line 45 ~ item', node)
      const data = {
        link: node.link?.uri,
        // image
      }
      return (
        <Stockist key={node.id} {...data}>
          {node.title}
        </Stockist>
      )
    })
  }
  return <Flex>{getItems(allStockists.nodes)}</Flex>
}

export default Stockists
