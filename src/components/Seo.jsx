/* eslint-disable camelcase */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { replaceBackendUrl } from '~util'

const Seo = ({ metatags }) => {
  const {
    description,
    canonical,
    geoPLaceName,
    image,
    abstract,
    keywords,
    robots,
    title,
  } = metatags || {}

  return (
    <Helmet title={title} titleTemplate={title}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <link rel="canonical" href={replaceBackendUrl(canonical)} />
      <meta name="robots" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && (
        <meta property="og:url" content={replaceBackendUrl(canonical)} />
      )}

      {title && <meta property="og:title" content={title} />}

      {description && <meta property="og:description" content={description} />}

      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}

Seo.propTypes = {
  metatags: PropTypes.shape({
    description: PropTypes.string,
    canonical: PropTypes.string,
    image: PropTypes.string,
    abstract: PropTypes.string,
    keywords: PropTypes.string,
    robots: PropTypes.string,
    title: PropTypes.string,
  }),
}

Seo.defaultProps = {
  metatags: {},
}

export default Seo

export const fragment = graphql`
  fragment Seo on nodeMetaTags {
    metatags {
      description
      canonical: canonical_url
      # image: image_src
      abstract
      keywords
      # robots
      title
    }
    langcode
    default_lang
  }
`
