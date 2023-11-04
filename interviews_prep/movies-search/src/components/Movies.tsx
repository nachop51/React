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
      {movies.map(({ id, title, year, poster }) => (
        <li className='movie' key={id}>
          <h3>{title}</h3>
          <p>{year}</p>
          <img src={poster} alt={title} />
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

  return (
    <>
      {
        hasResults
          ? <ListOfMovies movies={movies} />
          : <NoResults />
      }
    </>
  )
}
