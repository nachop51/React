import moviesResponse from '../mocks/movies.json'

interface useMoviesType {
  movies: Array<{
    id: string
    title: string
    year: string
    poster: string
    type: string
  }>
}

function useMovies (): useMoviesType {
  const movies = moviesResponse.Search

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type
  }))

  return { movies: mappedMovies }
}

export default useMovies
