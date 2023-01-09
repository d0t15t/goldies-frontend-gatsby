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

import * as U from './utils';

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
    siteUrl: 'https://goldies-frontend.netlify.app/',
    imageUrl: '/favicon.svg',
    language: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        //trackingId: process.env.GATSBY_GTAG_ID,
        trackingIds: [process.env.GATSBY_GTAG_ID],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Goldies Natural Beauty',
        short_name: 'Goldies',
        start_url: `/`,
        // background_color: theme.palette.primary.light,
        // theme_color: theme.palette.primary.main,
        display: `standalone`,
        icon: `static/favicon.svg`,
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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'products',
        engine: 'flexsearch',
        engineOptions: '',
        query: `
          {
            products: allNodeProduct(sort: { fields: drupal_internal__nid }) {
              nodes {
                id
                nid: drupal_internal__nid
                title
                path {
                  alias
                }
                rels: relationships {
                  tags: field_tags {
                    id
                    title: name
                  }
                  shopify_product: field_shopify_product {
                    body: body_html {
                      value
                    }
                  }
                }
              }
            }
            collections: allNodeCollection(sort: {fields: drupal_internal__nid}) {
              nodes {
                id
                nid: drupal_internal__nid
                title
                path {
                  alias
                }
                body {
                  processed
                }
                rels: relationships {
                  products: field_products {
                    id
                    rels: relationships {
                      tags: field_tags {
                        id
                        title: name
                      }
                    }
                  }
                }
              }
            }
            categories: allTaxonomyTermShopifyTags(sort: {fields: name}) {
              nodes {
                id
                nid: drupal_internal__tid
                title: name
                name
                rels: relationships {
                  products: node__product {
                    id
                    title
                    path {
                      alias
                    }
                  }
                }
              }
            }
          }
        `,
        ref: 'id',
        // index: ['title', 'body', 'tags', 'path'],
        index: ['title', 'tags', 'body'],
        store: ['title', 'tags', 'body', 'path', 'id'],
        // store: ['id', 'path', 'title', 'tags'],
        normalizer: ({ data }) => {
          const products = data.products.nodes.map((node) => {
            return {
              id: node.id,
              path: node.path.alias,
              body: node?.rels?.shopify_product?.body?.value || '',
              title: node.title,
              // tags: node?.rels?.tags.length ? node.rels.tags.map((e) => e.name) : [],
              tags: node?.rels?.tags.length ? node.rels.tags.map((e) => e.title) : [],
            };
          });
          const collections = data.collections.nodes.map((node) => {
            const cps = node.rels?.products || [];
            return {
              id: node.id,
              path: node.path.alias,
              title: node.title,
              body: node?.body?.processed,
              tags: cps.map((e) => (e.rels?.tags.length ? e.rels.tags.map((e) => e.title) : [])),
            };
          });
          const categories = data.categories.nodes
            .map((node) => {
              const path = U.getCategoryPath(node);
              const category_content_items = node?.rels?.products || [];
              return category_content_items.length
                ? {
                    id: node.id,
                    path: path.alias,
                    title: node.title,
                    body: '',
                    tags: category_content_items.map((e) => e.title),
                  }
                : null;
            })
            .filter((e) => e);
          const items = [...products, ...collections, ...categories].map((e) => {
            return { ...e, tags: e.tags.join(' ') };
          });
          return items;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    /* {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './assets'),
        name: 'assets',
      },
    }, */
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
