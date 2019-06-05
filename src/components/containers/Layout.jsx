import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import normalize from '../styles/normalize'
import theme from '../styles/theme'
import Footer from './Footer'

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
          <>
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
export default Layout
