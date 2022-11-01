/**
 * @file gatsby-node.ts
 */

import webpack from 'web';
import path from 'path';
import { NodeType } from 'gatsby-plugin-local-search/dist/types';
import * as U from './utils';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const frontPageId = process.env.GATSBY_DRUPAL_FRONTPAGE_ID;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type node__cta implements Node {
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
      drupal_id: String
      drupal_internal__nid: Int
      drupal_internal__vid: Int
      langcode: String
      status: Boolean
      title: String
      promote: Boolean
      sticky: Boolean
      default_langcode: Boolean
      revision_translation_affected: Boolean
      path: node__ctaPath
      body: node__ctaBody
      field_link: node__ctaField_link
      relationships: node__ctaRelationships
      node_type: node__ctaNode_type
      fields: node__ctaFields
    }

    type node__ctaPath {
      langcode: String
    }

    type node__ctaBody {
      value: String
      format: String
      processed: String
      summary: String
    }

    type node__ctaField_link {
      uri: String
      title: String
      url: String
    }

    type node__ctaRelationships {
      node_type: node_type__node_type
    }

    type node__ctaNode_type {
      drupal_internal__target_id: String
    }

    type node__ctaFields {
      slug: String
    }
    type Query {
      nodeCta(
      id: StringQueryOperatorInput
      parent: NodeFilterInput
      children: NodeFilterListInput
      internal: InternalFilterInput
      drupal_id: StringQueryOperatorInput
      drupal_internal__nid: IntQueryOperatorInput
      drupal_internal__vid: IntQueryOperatorInput
      langcode: StringQueryOperatorInput
      revision_timestamp: DateQueryOperatorInput
      status: BooleanQueryOperatorInput
      title: StringQueryOperatorInput
      created: DateQueryOperatorInput
      changed: DateQueryOperatorInput
      promote: BooleanQueryOperatorInput
      sticky: BooleanQueryOperatorInput
      default_langcode: BooleanQueryOperatorInput
      revision_translation_affected: BooleanQueryOperatorInput
      path: node__ctaPathFilterInput
      body: node__ctaBodyFilterInput
      field_link: node__ctaField_linkFilterInput
      relationships: node__ctaRelationshipsFilterInput
      node_type: node__ctaNode_typeFilterInput
      fields: node__ctaFieldsFilterInput
    ): node__cta
    allNodeCta(
      filter: node__ctaFilterInput
      sort: node__ctaSortInput
      skip: Int
      limit: Int
    ): node__ctaConnection!
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type.indexOf(`node__`) === 0) {
    const slug = (node?.path?.alias ?? `/node/${node.drupal_internal__nid}`).replace(/\/$|$/, '/');
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const promises = [];

  const getPath = (node) => {
    const nid = String(node.nid);
    return nid === frontPageId ? '/' : node?.path?.alias || `/node/${node.nid}`;
  };

  // const getComponent = (componentName: string) =>
  //   path.resolve(`./src/components/${componentName}/${componentName}.tsx`);

  const doCreateNodes = ({ nodeType, nodes }) => {
    return nodes.forEach((node) => {
      createPage({
        component: path.resolve(`./src/components/_Page/Page.tsx`),
        path: getPath(node),
        context: {
          id: node.id,
        },
      });
      // return true;
    });
  };

  const processQueryItems = (data) => {
    return Object.keys(data).forEach((nodeType) => {
      const nodes = data[nodeType]?.nodes;
      if (nodeType === 'category') {
        const categories_subset = nodes
          .map((e, i) => {
            const path = U.getCategoryPath(e);
            return { ...e, path };
          })
          .filter((e) => e?.rels?.node__product);

        return doCreateNodes({ nodeType, nodes: categories_subset });
      }
      return doCreateNodes({ nodeType, nodes });
    });
  };

  const pageQuerySets = {
    category: graphql(`
      {
        category: allTaxonomyTermShopifyTags(sort: { fields: drupal_internal__tid }) {
          nodes {
            id
            internal {
              type
            }
            nid: drupal_internal__tid
            name
            rels: relationships {
              node__product {
                id
              }
            }
          }
        }
      }
    `)
      .then((result) => {
        processQueryItems(result?.data);
        return true;
      })
      .catch(() => {
        console.error('Error');
      }),
    collection: graphql(`
      {
        collection: allNodeCollection(sort: { fields: drupal_internal__nid }) {
          nodes {
            id
            nid: drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
    `)
      .then((result) => {
        processQueryItems(result?.data);
        return true;
      })
      .catch(() => {
        console.error('Error');
      }),
    page: graphql(`
      {
        page: allNodePage(sort: { fields: drupal_internal__nid }) {
          nodes {
            id
            nid: drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
    `)
      .then((result) => {
        processQueryItems(result?.data);
        return true;
      })
      .catch(() => {
        console.error('Error');
      }),
    product: graphql(`
      {
        product: allNodeProduct(sort: { fields: drupal_internal__nid }) {
          nodes {
            id
            nid: drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
    `)
      .then((result) => {
        processQueryItems(result?.data);
        return true;
      })
      .catch(() => {
        console.error('Error');
      }),
  };

  promises.push(Object.values(pageQuerySets));

  return Promise.all(promises);
};

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ Buffer: ['buffer/', 'Buffer'] })],
    });
  }
};
