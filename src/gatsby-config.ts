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
        '~g': path.join(__dirname, './gatsby'),
        '~hooks': path.join(__dirname, './hooks'),
        '~src': path.join(__dirname, './'),
        '~static': path.join(__dirname, '../static'),
      },
    },

    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        // shopName: process.env.GATSBY_SHOP_NAME,
        shopName: 'goldies-natural-beauty',
        // accessToken: '47477a2978fa2f2abd99622b69fe4dee',
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        shouldConfigureSourcePlugin: false,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_DRUPAL_ROOT,
        basicAuth: {
          username: process.env.GATSBY_DRUPAL_API_USER_NAME,
          password: process.env.GATSBY_DRUPAL_API_USER_PASS,
        },
        filters: {
          nodes: `${process.env.GATSBY_DRUPAL_ROOT}jsonapi/node/page`,
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
    'gatsby-plugin-svgr',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
  ],
};

export default gatsbyConfig;
