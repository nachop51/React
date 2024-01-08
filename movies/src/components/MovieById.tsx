import { useParams } from 'react-router-dom'
import { LoadingIcon } from './Icons'
import useMovieById from '../hooks/useMovieById'
import MovieInfo from './MovieInfo'

const MovieById = () => {
  const { id } = useParams()
  if (id == null) { return null }
  const { movieData, loading } = useMovieById({ id })

  return (
    <>
      {
        loading
          ? <LoadingIcon />
          : (
              movieData == null
                ? <h2>Movie not found</h2>
                : <MovieInfo movieData={movieData} />
            )
      }
    </>
  )
}

export default MovieById
