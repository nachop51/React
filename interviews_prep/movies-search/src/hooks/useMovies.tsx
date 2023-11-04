import { useState } from 'react'
import { searchMovies } from '../services/omdb'
// import moviesResponse from '../mocks/movies.json'

interface useMoviesType {
  movies: Array<{
    id: string
      title: string
      year: string
      poster: string
      type: string
    }>,
  getMovies: () => void,
  loading: boolean,
  error: string | null
}

function useMovies ({ search }: { search: string }): useMoviesType {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { movies, loading, error, getMovies }
}

export default useMovies
