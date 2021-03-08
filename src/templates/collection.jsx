import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { graphql } from 'gatsby'
import { Box, Text } from '~components/base'
import SocialIcons from '~components/SocialIcons'
import Layout from '~components/Layout'
import TeasersGrid from '~components/TeasersGrid'
import { getRelativeUrl } from '~util'

const Collection = ({ data }) => {
  const { node, shopifyCollection, customShopifyProducts, seo } = data

  const getProductData = items => {
    return (
      (Array.isArray(items) &&
        items.map(item => {
          const variantCount = item?.variants.length
          const variant = item?.variants && item.variants.reverse().shift()
          const text = variantCount > 1 && `+ ${variantCount - 1} more options`
          const weight =
            variant?.weight % 1 === 0
              ? variant?.weight
              : variant?.weight.toFixed(1)
          return {
            title: item.title,
            weight: `${weight} ${variant?.weightUnit.toLowerCase()}`,
            text,
            price: variant?.price,
            variantId: variant?.variantId,
            image: item?.images.shift()?.localFile?.childImageSharp?.fluid,
            uri: getRelativeUrl(item.onlineStoreUrl),
          }
        })) ||
      []
    )
  }

  const getCustomProductData = (items, shopifyProducts) => {
    return (
      Array.isArray(items) &&
      items.map(item => {
        const product = shopifyProducts.find(
          shopifyProduct =>
            shopifyProduct.handle === item.relationships.shopify.handle
        )
        const variant = product?.variants.shift() || {}
        return {
          title: item.title,
          price: variant?.price,
          variantId: variant?.shopifyId,
          image: product?.images[0]?.localFile?.childImageSharp?.fluid,
          uri: item.path.alias,
        }
      })
    )
  }

  const shopifyProducts = getProductData(shopifyCollection.products)

  const customProducts = getCustomProductData(
    node.relationships?.products,
    customShopifyProducts?.nodes
  )

  const teasers = (customProducts.length && customProducts) || shopifyProducts

  const description = node.description?.value || shopifyCollection?.description

  const c = {
    title: node.title || shopifyCollection?.title,
    description: description && (
      <p dangerouslySetInnerHTML={{ __html: description }} />
    ),

    teasers,
  }

  return (
    <>
      <Layout metatags={{ ...seo }}>
        <Box className="collection-page">
          <Text
            as="h1"
            fontSize={[4]}
            mb={[3]}
            css={`
              text-align: center;
            `}
          >
            {c.title}
          </Text>
          <Box
            className="description"
            width={[5 / 6, 2 / 3]}
            mb={[null, 3]}
            m={['auto']}
          >
            {c.description}
          </Box>

          <TeasersGrid teasers={c.teasers} />
        </Box>
        <SocialIcons />
      </Layout>
    </>
  )
}

Collection.propTypes = {
  data: shape({
    customShopifyProducts: shape({}),
    node: shape({
      description: shape({
        value: string,
      }),
      relationships: shape({
        products: arrayOf(shape({})),
      }),
      title: string,
    }),
    nodeMetaTags: shape({}),
    shopifyCollection: shape({
      description: string,
      products: arrayOf(shape({})),
      title: string,
    }),
  }).isRequired,
}

export default Collection

export const query = graphql`
  query($id: String!, $nid: String!, $handle: String!, $products: [String]) {
    # this is the gatsby-source-drupal node.
    # node Values override the shopify values
    node: nodeCollection(id: { eq: $id }) {
      title
      description: body {
        value
      }
      relationships {
        termRef: field_shopify_collection {
          name
          description {
            value
          }
          # "handle" is the query parameter we use to fetch the rest of the data
          handle: field_shopify_handle
          relationships {
            collectionImage: field_shopify_collection_image {
              localFile {
                publicURL
              }
            }
          }
        }
        # these node-product references override the standard shopify-collection reference chain
        products: field_products {
          title
          path {
            alias
          }
          relationships {
            shopify: field_shopify_product {
              handle: field_shopify_handle
            }
          }
        }
      }
    }
    # this is the gatsby-source-shopify node.
    shopifyCollection(handle: { eq: $handle }) {
      description: descriptionHtml
      handle
      title
      shopifyId
      image {
        localFile {
          publicURL
        }
      }
      products {
        title
        shopifyId
        tags
        onlineStoreUrl
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        variants {
          variantId: shopifyId
          price
          weight
          weightUnit
          priceV2 {
            amount
            currencyCode
          }
        }
      }
    }

    customShopifyProducts: allShopifyProduct(
      filter: { handle: { in: $products } }
    ) {
      nodes {
        title
        shopifyId
        handle
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        variants {
          shopifyId
          price
        }
      }
    }

    seo: nodeMetaTags(drupal_internal__nid: { eq: $nid }) {
      ...Seo
    }
  }
`
