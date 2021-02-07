import React from 'react'
import { Footer } from '@components/Footer'
import { Navigation } from '@components/Navigation'
import { GlobalStyles } from '@styles/global-styles'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@styles/variables'

const Main = styled.main``

function MyApp({ Component, pageProps }: any) {
  return <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
}

export default MyApp
