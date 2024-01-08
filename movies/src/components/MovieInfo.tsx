import { type MovieData } from '../types'
import { LabelIcon } from './Icons'

const MovieInfo = ({ movieData }: { movieData: MovieData }) => {
  const { Poster, Actors, Year, Title, Genre, Plot, Ratings } = movieData

  const renderedRatings = Ratings.map(({ Source, Value }) => (
    <li key={Source}>
      <span>{Source}</span>
      {Value}
    </li>
  ))

  return (
    <main>
      <section className='movie-image'>
        <img src={Poster} alt={`${Title} - ${Year}`} />
      </section>
      <section className='movie-data'>
        <h1>{Title}</h1>
        <h2>Plot</h2>
        <p>{Plot}</p>
        <div>
          <LabelIcon />
          <p>{Genre}</p>
        </div>
        <h3>Cast</h3>
        <p>{Actors}</p>
        <ul>
          {renderedRatings}
        </ul>
      </section>
    </main>
  )
}

export default MovieInfo
