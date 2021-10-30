/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
import { GatsbyConfig } from 'gatsby';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import * as Promise from 'bluebird';

// global.Promise = Promise;

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const shopifyShopVars = {
  shopName: process.env.GATSBY_SHOP_NAME,
  shopToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
};

const drupalVars = {
  url: process.env.GATSBY_DRUPAL_ROOT,
  user: process.env.GATSBY_DRUPAL_API_USER_NAME,
  password: process.env.GATSBY_DRUPAL_API_USER_PASS,
};

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Skeleton',
    description: 'Gatsby starter featuring TypeScript, ESLint, Prettier and more...',
    keywords: ['gatsby', 'starter', 'typescript', 'eslint', 'prettier', 'layout', 'seo'],
    siteUrl: 'https://gatsby-starter-skeleton.netlify.app',
    imageUrl: '/social.jpg',
    language: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~components': path.join(__dirname, './components'),
        '~context': path.join(__dirname, './context'),
        '~templates': path.join(__dirname, './templates'),
        '~utils': path.join(__dirname, './utils'),
        '~hooks': path.join(__dirname, './hooks'),
        '~src': path.join(__dirname, './'),
        '~static': path.join(__dirname, '../static'),
      },
    },

    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: shopifyShopVars.shopName,
        accessToken: shopifyShopVars.shopToken,
        shouldConfigureSourcePlugin: false,
      },
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: drupalVars.url,
        apiBase: 'jsonapi',
        basicAuth: {
          username: drupalVars.user,
          password: drupalVars.password,
        },
        // filters: {
        //   nodes: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/page`,
        // },
      },
    },
    {
      resolve: 'gatsby-source-drupal-rest',
      options: {
        endpoints: [
          // `${drupalVars.url}/rest/menu-item`,
          // `${drupalVars.url}/rest/meta-tags?type=node&bundle=page`,
          // `${drupalVars.url}/rest/meta-tags?type=node&bundle=collection`,
          // `${drupalVars.url}/rest/meta-tags?type=node&bundle=product`,
        ],
        basicAuth: {
          username: drupalVars.user,
          password: drupalVars.password,
        },
        concurrentFileRequests: 1,
      },
    },
    // {
    //   resolve: `gatsby-source-drupal-menu-links`,
    //   options: {
    //     baseUrl: process.env.GATSBY_DRUPAL_ROOT,
    //     apiBase: 'jsonapi',
    //     menus: ['main', 'sidebar', 'footer'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'products',
        engine: 'flexsearch',
        engineOptions: '',
        query: `
          {
            allNodeProduct(sort: { fields: drupal_internal__nid }) {
              nodes {
                id
                nid: drupal_internal__nid
                title
                path {
                  alias
                }
              }
            }    
          }
        `,
        ref: 'id',
        index: ['title', 'body'],
        store: ['id', 'path', 'title'],
        normalizer: ({ data }) => {
          return data.allNodeProduct.nodes.map((node) => ({
            id: node.id,
            path: node.path.alias,
            title: node.title,
          }));
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './assets'),
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-use-query-params',
    // 'gatsby-plugin-portal',
    // 'gatsby-plugin-preact',
  ],
};

export default gatsbyConfig;
