import { Suspense, lazy } from 'react'

import HomePage from './components/Home'
// import AboutPage from './components/About' // static import
import Router from './Router'
import Route from './Route'
import SearchPage from './components/Search'

const AboutPage = lazy(async () => await import('./components/About')) // dynamic import

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
