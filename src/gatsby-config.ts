/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
import { GatsbyConfig } from 'gatsby';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import * as Promise from 'bluebird';

import theme from 'src/style/theme';

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
    title: 'Goldies Natural Beauty',
    description:
      'Natural candles, beauty products, soaps, and more. Handmade in Rockaway Beach, NY.',
    keywords: [
      'beauty products',
      'natural',
      'soap',
      'soaps',
      'herbal',
      'woman owned business',
      'rockaway beach',
    ],
    siteUrl: 'https://goldiessoap.com/gatsby-starter-skeleton.netlify.app',
    imageUrl: '/favicon_io/apple-touch-icon.png',
    language: 'en',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Goldies Natural Beauty',
        short_name: 'Goldies',
        start_url: `/`,
        // background_color: theme.palette.primary.light,
        // theme_color: theme.palette.primary.main,
        display: `standalone`,
        icon: `static/favicon_io/apple-touch-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~components': path.join(__dirname, './components'),
        '~context': path.join(__dirname, './context'),
        '~templates': path.join(__dirname, './templates'),
        '~utils': path.join(__dirname, './utils'),
        '~hooks': path.join(__dirname, './hooks'),
        '~styles': path.join(__dirname, './style'),
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
        concurrentFileRequests: 1,
        links: {
          page: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/page`,
          product: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/product`,
          collection: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/collection`,
          stockist: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/stockist`,
        },
      },
    },
    {
      resolve: `gatsby-source-drupal-menu-links`,
      options: {
        baseUrl: drupalVars.url,
        apiBase: 'jsonapi',
        menus: ['main', 'footer', 'footer-1'],
        basicAuth: {
          username: drupalVars.user,
          password: drupalVars.password,
        },
      },
    },
    // {
    //   resolve: 'gatsby-source-drupal-rest',
    //   options: {
    //     endpoints: [
    //       // `${drupalVars.url}/rest/menu-item`,
    //       // `${drupalVars.url}/rest/meta-tags?type=node&bundle=page`,
    //       // `${drupalVars.url}/rest/meta-tags?type=node&bundle=collection`,
    //       // `${drupalVars.url}/rest/meta-tags?type=node&bundle=product`,
    //     ],
    //     basicAuth: {
    //       username: drupalVars.user,
    //       password: drupalVars.password,
    //     },
    //     concurrentFileRequests: 1,
    //   },
    // },
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito\:400,400i,700`, `Libre Baskerville\:400,400i`],
        display: 'swap',
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-material-ui',
    // 'gatsby-plugin-use-query-params',
    // 'gatsby-plugin-portal',
    // 'gatsby-plugin-preact',
  ],
};

export default gatsbyConfig;
