import React from 'react'
// import { SEO } from '~components/SEO'
import { Box, Br, Text } from '~components/base'
import Layout from '~components/Layout'

const IndexPage = () => {
  return (
    <>
      <Layout header menu footer>
        <Text as="h1">404</Text>
        <Text as="p">The page you're looking for doesn't exist.</Text>
      </Layout>
    </>
  )
}

export default IndexPage
