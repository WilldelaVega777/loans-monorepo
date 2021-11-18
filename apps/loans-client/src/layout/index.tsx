import React, { Fragment, lazy, Suspense, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContext, IAppContext, RoutesUnprotected } from 'config'
import { GlobalStyle } from './styles-global'
import { LayoutContent, LayoutRoot, LayoutWrapper } from './styles'

// Lazy Load
const NavTop = lazy(async () => await import('./components/nav-top'))
const NavLeft = lazy(async () => await import('./components/nav-left'))

const Layout: React.FC = () => {
  const [theme, setTheme] = useState<string>('light')
  return (
    <Fragment>
      <Suspense fallback={<Fragment />}>
        <AppContext.Provider
          value={{ username: null, theme, setTheme } as IAppContext}
        >
          <Router>
            <GlobalStyle />
            <ThemeProvider theme={{ mode: theme }}>
              <LayoutRoot>
                <NavTop />
                <LayoutWrapper>
                  <NavLeft />
                  <LayoutContent>
                    <RoutesUnprotected />
                  </LayoutContent>
                </LayoutWrapper>
              </LayoutRoot>
            </ThemeProvider>
          </Router>
        </AppContext.Provider>
      </Suspense>
    </Fragment>
  )
}

export default Layout
