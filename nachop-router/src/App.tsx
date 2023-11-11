import { Suspense, lazy } from 'react'

import HomePage from './pages/Home'
// import AboutPage from './components/About' // static import
import { Router } from './components/Router'
import { Route } from './components/Route'
import SearchPage from './pages/Search'

const AboutPage = lazy(async () => await import('./pages/About')) // dynamic import

const appRoutes = [
  // {
  //   path: '/',
  //   Component: HomePage
  // },
  // {
  //   path: '/about',
  //   Component: AboutPage
  // },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App (): JSX.Element {
  return (
    <>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router routes={appRoutes}>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/search/:query' Component={SearchPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
