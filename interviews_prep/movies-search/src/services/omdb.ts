const API_KEY = 'b9bd48a6'

interface MovieResponse {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type: string
}

export interface Movie {
  id: string
  title: string
  year: string
  poster: string
  type: string
}

export const searchMovies = async ({ search }): Promise<Movie[]> => {
  if (search === '') {
    return null
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const data = await response.json()

    const movies: MovieResponse[] = data.Search
    console.log(movies)

    return movies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))
  } catch (err) {
    throw new Error('Error fetching movies')
  }
}
