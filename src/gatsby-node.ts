/**
 * @file gatsby-node.ts
 */

import path from 'path';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const frontPageId = process.env.GATSBY_DRUPAL_FRONTPAGE_ID;
// import { g } from './utils';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const promises = [];

  const getPath = (node) => {
    const nid = String(node.nid);
    return nid === frontPageId ? '/' : node?.path?.alias || `/node/${node.nid}`;
  };

  const getComponent = (componentName: string) =>
    path.resolve(`./src/components/${componentName}/${componentName}.tsx`);

  // const doCreatePage = ({ componentName, node }) => {
  //   const capitalizeFirstLetter = (string: string) => {
  //     return string.charAt(0).toUpperCase() + string.slice(1);
  //   };
  //   createPage({
  //     component: getComponent(componentName),
  //     path: getPath(node),
  //     context: {
  //       id: node.id,
  //     },
  //   });
  //   return true;
  // };

  const getTemplate = async ({ nodeType, nodes }) => {
    const templates = {
      collection: ({ nodeType, nodes }) => {
        nodes.forEach((node) => {
          createPage({
            component: getComponent('Page'),
            path: getPath(node),
            context: {
              id: node.id,
            },
          });
          return true;
        });
      },
      page: ({ nodeType, nodes }) => {
        nodes.forEach((node) => {
          createPage({
            component: getComponent('Page'),
            path: getPath(node),
            context: {
              id: node.id,
            },
          });
          return true;
        });
      },
      product: ({ nodeType, nodes }: Object) => {
        nodes.forEach((node) => {
          createPage({
            component: getComponent('Page'),
            path: getPath(node),
            context: {
              id: node.id,
            },
          });
          return true;
        });
      },
    };
    return templates[nodeType]({ nodeType, nodes });
  };

  const processQueryItems = (data) => {
    return Object.keys(data).forEach((nodeType) => {
      const nodes = data[nodeType]?.nodes;
      return getTemplate({ nodeType, nodes });
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

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '~components': path.resolve(__dirname, './src/components'),
//         '~static': path.resolve(__dirname, './static'),
//         '~hooks': path.resolve(__dirname, './src/hooks'),
//         '~g/*': path.resolve(__dirname, './src/gatsby/*'),
//         '~src': path.resolve(__dirname, './src'),
//       },
//     },
//   });
// };
