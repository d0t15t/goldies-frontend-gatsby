/**
 * @file gatsby-node.ts
 */
import webpack from 'web';
import path from 'path';
import * as U from './utils';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const frontPageId = process.env.GATSBY_DRUPAL_FRONTPAGE_ID;

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
        // component: getComponent(U.capitalizeFirstLetter(nodeType)),
        component: path.resolve(`./src/components/_Page/Page.tsx`),
        path: getPath(node),
        context: {
          id: node.id,
        },
      });
      return true;
    });
  };

  const processQueryItems = (data) => {
    return Object.keys(data).forEach((nodeType) => {
      const nodes = data[nodeType]?.nodes;
      return doCreateNodes({ nodeType, nodes });
    });
  };

  const pageQuerySets = {
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
