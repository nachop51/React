import { useState } from 'react'
import { SearchIcon } from './Icons'

interface SearchBarProps {
  searchMovies: ({ query }: { query: string }) => void
}

const SearchBar = ({ searchMovies }: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.length < 2) {
      setError('You must enter at least two characters.')
      return
    }

    if (query.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
    ) != null) {
      setError('Special characters are forbidden')
      return
    }

    try {
      searchMovies({ query })
    } catch {
      setError('Something went wrong, probably a network error.')
      return
    }
    if (error != null) setError(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={handleChange} />
        <button>
          <SearchIcon />
        </button>
      </form>
      {
        error != null && <p>{error}</p>
      }
    </>
  )
}

export default SearchBar
