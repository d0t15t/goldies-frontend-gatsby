const envPath = `.env.${process.env.NODE_ENV}`

require('dotenv').config({ path: envPath })

const website = require('./src/config/website')

const shopifyName = process.env.GATSBY_SHOP_NAME
const shopifyToken = process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
const googleAnalyticsId = process.env.GATSBY_GA_ID

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix
const drupalSourceUrl = process.env.GATSBY_DRUPAL_ROOT
const drupalUserName = process.env.GATSBY_DRUPAL_API_USER_NAME
const drupalUserPass = process.env.GATSBY_DRUPAL_API_USER_PASS

const imageQuality = '95'

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    googleAnalyticsId,
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: shopifyName,
        accessToken: shopifyToken,
        verbose: true,
        paginationSize: 200,
      },
    },
    {
      resolve: 'gatsby-theme-shopify-manager',
      options: {
        shopName: shopifyName,
        accessToken: shopifyToken,
        // shouldConfigureSourcePlugin: false,
        // shouldWrapRootElementWithProvider: false
      },
    },
    {
      resolve: 'gatsby-source-drupal-rest',
      options: {
        endpoints: [
          // `${drupalSourceUrl}/rest/menu-items`,
          `${drupalSourceUrl}/rest/meta-tags?type=node&bundle=page`,
          `${drupalSourceUrl}/rest/meta-tags?type=node&bundle=collection`,
          `${drupalSourceUrl}/rest/meta-tags?type=node&bundle=product`,
        ],
        basicAuth: {
          username: drupalUserName,
          password: drupalUserPass,
        },
        concurrentFileRequests: 1,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: drupalSourceUrl,
        basicAuth: {
          username: drupalUserName,
          password: drupalUserPass,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: imageQuality,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      // options: {
      //   linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      // },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [
          `title`,
          // `tags`
        ],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          node__product: {
            title: node => node.title,
            // tags: node => node.relationships.node__collection.title,
            path: node => node.path.alias,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-fontawesome-css',
  ],
}
