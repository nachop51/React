import { useRef, useEffect, useState } from 'react'

interface useSearchType {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  error: string | null
}

function useSearch (): useSearchType {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('Cannot search a movie without a title')
      return
    }
    if (search.match(/^\d+$/) !== null) {
      setError('Cannot search a movie with only numbers')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

export default useSearch
