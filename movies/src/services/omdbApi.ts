import { type MovieData, type MoviesResponse } from '../types'

export const fetchMovies = async ({ query }: { query: string }) => {
  const url = `https://www.omdbapi.com/?apikey=????&s=${query}`

  try {
    const res = await fetch(url)

    if (!res.ok) throw new Error('Something went wrong')

    const data = await res.json() as MoviesResponse

    return data.Search
  } catch (err) {
    throw new Error('Something went wrong when making the request.')
  }
}

export const fetchMovieById = async ({ id }: { id: string }) => {
  const url = `https://omdbapi.com/?apikey=????&i=${id}`

  try {
    const res = await fetch(url)

    if (!res.ok) throw new Error('Something went wrong')

    const data = await res.json()

    if (data?.Error != null) {
      throw new Error('Movie not found')
    }

    return data as MovieData
  } catch (err) {
    throw new Error('Something went wrong when making the request.')
  }
}
