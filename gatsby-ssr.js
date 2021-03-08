/* eslint-disable react/jsx-props-no-spreading */
const React = require('react')
const GoogleAnalytics = require('react-ga')
const website = require('./src/config/website')
const themeProvider = require('./src/context/ThemeContext').default
const Layout = require('./src').default

// exports.onClientEntry = () => {
//   GoogleAnalytics.initialize(website.googleAnalyticsId)
// }

// eslint-disable-next-line react/prop-types,react/display-name
exports.wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = themeProvider
