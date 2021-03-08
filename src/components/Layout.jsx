import React from 'react'
import { arrayOf, node, oneOfType, bool } from 'prop-types'
import { Box, Flex } from '~components/base'
import Header from '~components/Header'
import Footer from '~components/Footer'
import Menu from '~components/Menu'
import Wave from '~components/Wave'
import Modal from '~components/Modal'
import { themeGet } from '~style'

import Seo from '~components/Seo'

import Region from './Region'

const MainContentWrapper = ({ children, variant }) => {
  switch (variant) {
    case 'frontpage':
      return (
        <Flex flexWrap="wrap" flexDirection="column">
          {children}
        </Flex>
      )
    default:
      return (
        <Flex
          flexWrap="wrap"
          flexDirection="column"
          p={[3, 0]}
          width={[null, 5 / 6]}
          margin={['auto']}
        >
          {children}
        </Flex>
      )
  }
}

const Layout = ({ children, menu, metatags, variant }) => {
  return (
    <>
      {metatags && <Seo {...metatags} />}
      <Flex
        height="100%"
        flexWrap="wrap"
        alignItems="stretch"
        flexDirection="column"
        className="layout"
        css="min-height: 100vh;"
      >
        <Header />
        <Wave />
        {menu && <Menu />}
        <Region
          className="main"
          regionName="main"
          width={1}
          flex="1 0 auto"
          css={`
            max-width: ${themeGet('space.unit.maxWidth', '900px')};
            margin: 0 auto;
          `}
        >
          <MainContentWrapper variant={variant}>{children}</MainContentWrapper>
        </Region>
        <Footer />
      </Flex>
      <Modal />
    </>
  )
}

Layout.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  menu: bool,
}

Layout.defaultProps = {
  menu: false,
}

export default Layout
