import { useEffect, useState } from 'react'
import { type MovieData } from '../types'
import { fetchMovieById } from '../services/omdbApi'

const useMovieById = ({ id }: { id: string }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetchMovieById({ id })
      .then(data => { setMovieData(data) })
      .catch(err => { console.error(err) })
      .finally(() => { setLoading(false) })
  }, [id])

  return { movieData, loading }
}

export default useMovieById
