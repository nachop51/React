import HomePage from './components/Home'
import AboutPage from './components/About'
import Router from './Router'
import Route from './Route'
import SearchPage from './components/Search'

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
        <Router routes={appRoutes}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/search/:query' Component={SearchPage} />
        </Router>
      </main>
    </>
  )
}

export default App
