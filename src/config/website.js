module.exports = {
  pathPrefix: '/',
  url: 'https://goldiessoap.com/',
  title: 'Goldies Natural Beauty',
  titleTemplate: '%s — get some!',
  description: 'All natural body products made in Rockaway Beach, NYC.',
  image: '~static/images/goldies-logo.webp', // Path to the default meta image in 'static' folder
  siteLanguage: 'en', // Language tag on <html> element

  // Web App Manifest
  favicon: '~static/images/goldies-logo.webp', // Used for manifest favicon generation
  shortName: 'Goldies', // shortname for manifest. *Must* be shorter than 12 characters
  themeColor: 'hsl(43, 87%, 67%)',
  backgroundColor: 'hsl(228, 33%, 97%)',

  // schema.org JSONLD
  headline: 'Goldies Natural Beauty Products.',
  author: '',

  // Google & Twitter
  googleAnalyticsId: 'UA-34301394-1',
}
