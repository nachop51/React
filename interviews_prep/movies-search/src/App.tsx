import React, { useState } from 'react'
import './App.css'
import useMovies from './hooks/useMovies'
import { Movies } from './components/Movies'

function App (): JSX.Element {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Search for movies</h1>
        <form className='form'>
          <input placeholder='Raiders of the Lost Ark' />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
