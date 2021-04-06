import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getShopifyUuid } from '~util'
import { Link } from '~components/Link'
import { Box, Text } from '~components/base'
import { theme, themeGet } from '~style'

const { colorSchemes } = theme

const ProductCollections = ({ id, uuid }) => {
  const {
    drupalShopifyCollections,
    productShopifyCollections,
  } = useStaticQuery(graphql`
    query productShopifyCollections {
      productShopifyCollections: allShopifyCollection {
        nodes {
          title
          handle
          shopifyId
          products {
            title
            shopifyId
          }
        }
      }

      drupalShopifyCollections: allNodeCollection {
        nodes {
          title
          id
          path {
            alias
          }
          relationships {
            shopify: field_shopify_collection {
              id: field_shopify_collection_id
            }
          }
        }
      }
    }
  `)

  function getShopifyCollectionsForProduct(nodes, productUuid) {
    return nodes?.filter(collection => {
      return collection.products.find(
        product => product.shopifyId === productUuid
      )
    })
  }

  function getDrupalCollections(collections, drupalCollections) {
    return drupalCollections.reduce((sum, cur) => {
      const curUuid = getShopifyUuid(
        cur.relationships.shopify?.id,
        'Collection'
      )
      const find = collections.find(item => item.shopifyId === curUuid)
      return find ? sum.concat(cur) : sum
    }, [])
  }

  const productUuid = uuid || getShopifyUuid(id)

  const shopifyCollections = getShopifyCollectionsForProduct(
    productShopifyCollections.nodes,
    productUuid
  )

  const drupalCollections = getDrupalCollections(
    shopifyCollections,
    drupalShopifyCollections.nodes
  )

  const items = drupalCollections.map(item => {
    return (
      <Box
        as="li"
        key={item.id}
        css={`
          // color: yellow;
        `}
      >
        <Link to={item.path.alias} from="product-collection-reference">
          {item.title}
        </Link>
      </Box>
    )
  })

  return (
    <Box
      mt={[null, 3]}
      pl={[null, null, 2]}
      css={`
        ul,
        li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}
    >
      <Text as="h5" fontSize={[2]} color={[colorSchemes.default.grey]}>
        This product is found in the following collecitons:
      </Text>
      <Box as="ul">{items}</Box>
    </Box>
  )
}

export default ProductCollections
