import React from 'react'
import PropTypes from 'prop-types'
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-oldschool-dark'
import { ContextProvider as ShopifyContextProvider } from 'gatsby-theme-shopify-manager'
import { ThemeContext } from '~context/ThemeContext'
import { ThemeProvider, theme } from '~style'
import GlobalStyles from '~style/GlobalStyles'
import { ContextProvider } from '~context/Store'

const shopifyAccess = {
  shopName: process.env.GATSBY_SHOP_NAME,
  accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
}

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <ThemeContext.Consumer>
        {context => (
          <>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {/* <CookieConsentProvider> */}
              <ShopifyContextProvider {...shopifyAccess}>
                <AlertProvider
                  template={AlertTemplate}
                  timeout={5000}
                  position={positions.BOTTOM_CENTER}
                >
                  {children}
                </AlertProvider>
              </ShopifyContextProvider>
              {/* </CookieConsentProvider> */}
            </ThemeProvider>
          </>
        )}
      </ThemeContext.Consumer>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
