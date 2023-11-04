import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/omdb'
// import moviesResponse from '../mocks/movies.json'

interface useMoviesType {
  movies: Array<{
    id: string
    title: string
    year: string
    poster: string
    type: string
  }>
  getMovies: ({ search }: { search: string }) => Promise<undefined>
  loading: boolean
  error: string | null
}

function useMovies ({ search, sort }: { search: string, sort: boolean }): useMoviesType {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  // const getMovies = async (): Promise<undefined> => {
  // * This funciton gets re-created every time the component re-renders
  // * as we type 'Movie name' in the input, this function will be destroyed and re-created
  // * times the number of characters we type
  //   if (search === previousSearch.current) return
  //   try {
  //     setLoading(true)
  //     setError(null)
  //     previousSearch.current = search
  //     const newMovies = await searchMovies({ search })
  //     setMovies(newMovies)
  //   } catch (error) {
  //     setError(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // * This will be called every time the component re-renders
  // * in a large movie list, this will be a performance issue
  // const getSortedMovies = () => {
  //   console.log('re render')
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies

  //   return sortedMovies
  // }

  // const getMovies = useMemo(() => {
  // & This function will be created only once
  // & and the search will be a dependency
  //   return async ({ search }): Promise<undefined> => {
  //     if (search === previousSearch.current) return
  //     try {
  //       setLoading(true)
  //       setError(null)
  //       previousSearch.current = search
  //       const newMovies = await searchMovies({ search })
  //       setMovies(newMovies)
  //     } catch (error) {
  //       setError(error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [])

  const getMovies = useCallback(async ({ search }): Promise<undefined> => {
    // ^ This is the same as the useMemo example
    // & but using useCallback instead
    // ^ here we directly return the function
    // ^ useCallbacks is used to memoize functions
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    // & This will be called only when the sort or movies change
    // & if the search changes, it will not be called
    // & because search is not a dependency
    // console.log('memo re render')

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, error, getMovies }
}

export default useMovies
