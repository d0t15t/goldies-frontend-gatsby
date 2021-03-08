/* eslint-disable no-console */
const envPath = `.env.${process.env.NODE_ENV}`

require('dotenv').config({ path: envPath })

const frontPageId = process.env.GATSBY_DRUPAL_FRONTPAGE_ID

const path = require('path')

const Promise = require(`bluebird`)

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     devtool: 'eval-source-map',
//   })
// }

/*
 * https://www.mrozilla.cz/blog/gatsby-eslint-vscode-import-alias/
 * See: https://github.com/alampros/gatsby-plugin-resolve-src/issues/4
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~style': path.resolve(__dirname, './src/style'),
        '~components': path.resolve(__dirname, './src/components'),
        '~context': path.resolve(__dirname, './src/context'),
        '~config': path.resolve(__dirname, './src/config'),
        '~templates': path.resolve(__dirname, './src/templates'),
        '~util': path.resolve(__dirname, './src/util'),
        '~static': path.resolve(__dirname, './static'),
        '~src': path.resolve(__dirname, './src'),
      },
    },
  })
}

/* Schema.
 */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type paragraph__teaser implements Node {
//       relationships: paragraph__teaserRelationships
//     }
//     type paragraph__teaserRelationships {
//       field_page: node__page @link(from: "field_page___NODE")
//     }
//   `
//   createTypes(typeDefs)
// }

/* Create nodes.
 */

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   const pageTypes = [
//     { id: 'ShopifyCollection', type: 'collection' },
//     { id: 'ShopifyProduct', type: 'product' },
//   ]

//   pageTypes.filter(item => {
//     if (item.id === node.internal.type) {
//       createNodeField({
//         node,
//         name: 'uri',
//         value: `/${item.type}s/${node.handle}/`,
//       })
//       createNodeField({
//         node,
//         name: 'type',
//         value: item.type,
//       })
//       return false
//     }
//   })

//   const nodeTypes = {''}

//   if (node.internal.type === 'node__page') {
//     createNodeField({
//       node,
//       name: 'uri',
//       value: node.path.alias,
//     })
//     createNodeField({
//       node,
//       name: 'type',
//       value: 'page',
//     })
//     return false
//   }
// }

/**
 * createPages()
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const promises = []

  const allNodes = graphql(`
    {
      page: allNodePage {
        nodes {
          id
          nid: drupal_internal__nid
          path {
            alias
          }
          title
        }
      }
      collection: allNodeCollection {
        nodes {
          id
          nid: drupal_internal__nid
          path {
            alias
          }
          title
          relationships {
            collection: field_shopify_collection {
              handle: field_shopify_handle
            }
            products: field_products {
              relationships {
                shopify: field_shopify_product {
                  handle: field_shopify_handle
                }
              }
            }
          }
        }
      }
      product: allNodeProduct {
        nodes {
          id
          nid: drupal_internal__nid
          path {
            alias
          }
          title
          relationships {
            product: field_shopify_product {
              handle: field_shopify_handle
            }
          }
        }
      }
    }
  `)
    .then(result => {
      const data = result?.data
      const hasReference = ['product', 'collection']
      Object.keys(data).forEach(nodeType => {
        const nodeTemplate = path.resolve(`./src/templates/${nodeType}.jsx`)
        const nodes = data[nodeType]?.nodes
        nodes.forEach(node => {
          const nid = String(node.nid)
          const handle =
            (hasReference.includes(nodeType) &&
              node?.relationships[nodeType]?.handle) ||
            ''

          const products =
            nodeType === 'collection' &&
            node.relationships?.products.map(
              item => item?.relationships?.shopify?.handle
            )

          createPage({
            component: nodeTemplate,
            path: nid === frontPageId ? '/' : node?.path?.alias,
            context: {
              id: node.id,
              nid,
              handle,
              products: nodeType === 'collection' ? products : null,
              title: node.title,
            },
          })
          return true
        })
        return true
      })
      return true
    })
    .catch(() => {
      console.error('Error')
    })

  promises.push(allNodes)

  return Promise.all(promises)
}
