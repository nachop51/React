import { useState } from 'react'
import { type MovieList } from '../types'
import { fetchMovies } from '../services/omdbApi'

const useMovies = () => {
  const [movies, setMovies] = useState<MovieList>([])
  const [loading, setLoading] = useState(false)

  const searchMovies = ({ query }: { query: string }) => {
    setLoading(true)

    fetchMovies({ query })
      .then(data => { setMovies(data) })
      .catch(err => { console.error(err) })
      .finally(() => { setLoading(false) })
  }

  return { movies, loading, searchMovies }
}

export default useMovies
