import { Link } from 'react-router-dom'
import { type Movies } from '../types.d'

interface MoviesListProps {
  movies: Movies[]
}

const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <section>
      {
        movies.map(({ imdbID, Poster, Year, Title }) => {
          return (
            <article key={imdbID}>
              <Link to={imdbID}>
                <img src={Poster} alt={`${Title} - ${Year}`} />
                <h3>{Title}</h3>
                <p>{Year}</p>
              </Link>
            </article>
          )
        })
      }
    </section>
  )
}

export default MoviesList
