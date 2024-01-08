import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import { LoadingIcon } from './Icons'
import useMovies from '../hooks/useMovies'

function Movies () {
  const { movies, loading, searchMovies } = useMovies()

  return (
    <main>
      <h1>Filmder</h1>
      <SearchBar searchMovies={searchMovies} />
      {
        loading && <LoadingIcon w={5} h={5} />
      }
      {
        !loading && movies.length !== 0 && <MoviesList movies={movies} />
      }
    </main>
  )
}

export default Movies
