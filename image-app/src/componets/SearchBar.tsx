import './SearchBar.css'
import React, { useState } from 'react'
import { SearchIcon } from './Icons'

interface SearchBarProps {
  searchImages: ({ query }: { query: string }) => void
}

const SearchBar = ({ searchImages }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setQuery(e.target.value) }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchImages({ query })
  }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit} className='searchbar-form'>
        <input type='text' value={query} onChange={handleChange} />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
