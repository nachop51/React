import React from 'react'

interface Movie {
  id: string
  title: string
  year: string
  poster: string
}

const ListOfMovies = ({ movies }: { movies: Movie[] }): JSX.Element => {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}

const NoResults = (): JSX.Element => {
  return <p>No results were found</p>
}

export const Movies = ({ movies }: { movies: Movie[] }): JSX.Element => {
  const hasResults = movies?.length > 0

  return <>{hasResults ? <ListOfMovies movies={movies} /> : <NoResults />}</>
}
