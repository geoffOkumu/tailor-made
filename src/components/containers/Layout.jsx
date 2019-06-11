import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import normalize from '../styles/normalize'
import theme from '../styles/theme'
import Footer from './Footer'
import CartProvider from './Cart'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
  ${normalize}
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <title>Tailor Made</title>
          <html lang="en" />
        </Helmet>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
export default Layout
