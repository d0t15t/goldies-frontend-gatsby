import * as path from 'path';
import { GatsbyCreatePages } from '../@types/gatsby';

const createPages: GatsbyCreatePages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  // const createPages = async ({ graphql, boundActionCreators }) => {
  //   const { createPage } = boundActionCreators;

  const promises = [];

  const templates = {
    product: ({ nodeType, nodes }) => {
      console.log('🚀 ~ file: createPages.ts ~ line 13 ~ //createPages ~ nodeType', nodeType);
      const nodeTemplate = path.resolve(`./src/components/Product/Product.tsx`);
      // const nodes = data[nodeType]?.nodes;
      nodes.forEach((node) => {
        createPage({
          component: nodeTemplate,
          path: node.id,
          context: {
            id: node.id,
          },
        });
        return true;
      });
    },
  };

  const allShopifyProduct = graphql(`
    {
      product: allNodePage {
        nodes {
          id
          title
        }
      }
    }
  `)
    .then((result) => {
      const data = result?.data;
      Object.keys(data).forEach((nodeType) => {
        const nodes = data[nodeType]?.nodes;
        const template = templates[nodeType];
        return template({ nodeType, nodes });
        // return (nodeType, nodes) => template[nodeType];
        // return true;
      });
      return true;
    })
    .catch(() => {
      console.error('Error');
    });

  promises.push(allShopifyProduct);

  return Promise.all(promises);
};
