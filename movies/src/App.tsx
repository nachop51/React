import { Routes, Route, Link } from 'react-router-dom'
import Movies from './components/Movies'
import MovieInfo from './components/MovieById'

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>🏠</Link>
      </nav>
      <Routes>
        <Route index element={<Movies />} />
        <Route path=':id' element={<MovieInfo />} />
      </Routes>
    </>
  )
}

export default App
