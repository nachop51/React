import React, { useCallback, useEffect, useState /* useRef, */ } from 'react'
import './App.css'
import useMovies from './hooks/useMovies'
import { Movies } from './components/Movies'
import useSearch from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App (): JSX.Element {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  // const inputRef = useRef<HTMLInputElement>(null)
  // ^ useRef is used to get a constant reference to a mutable value
  // code: const ref = useRef(0)
  // code: ref.current = ref.current + 1
  // code: console.log(ref.current)
  // ^ Every time we change the value of the ref, the component will not re-render

  // * The thing with this implementation is that the function will be re-created every time the component re-renders
  // * so each time it will create a differente debounced function
  // * all will get executed
  // const debouncedGetMovies = debounce(({ search }) => {
  //   console.log('debounced')
  //   getMovies({ search })
  // }, 500)

  const debouncedGetMovies = useCallback(
    debounce(({ search }) => {
      getMovies({ search })
    }, 300),
    [getMovies]
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // const input = inputRef.current
    // console.log(input?.value)
    //
    // The reference is not necessary, we could use the event object
    // ^ const data = new window.FormData(e.currentTarget)
    // ^ console.log(data.get('query'))
    //
    // Another cool way to get the value of the input
    // ^ const { query } = Object.fromEntries(new window.FormData(e.currentTarget))
    //
    // * However, we are using the DOM reference to use the value of the input
    // * This may be good for javascript, but this is not the best way to do it in React
    // & This is called 'uncontrolled components'
    // & Since we are not using the state to store the value of the input
    // console.log(search)
    getMovies({ search })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // & target vs currentTarget
    // * target is the element that triggered the event
    // * currentTarget is the element that the event listener is attached to
    // const newSearch = e.target.value
    const newSearch = e.currentTarget.value

    setSearch(newSearch)

    // getMovies({ search: newSearch })
    debouncedGetMovies({ search: newSearch })
  }

  const handleSort = (): void => {
    setSort(!sort)
  }

  // useEffect(() => {
  //   console.log('new getMovies created')
  // }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Search for movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error !== null ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Raiders of the Lost Ark' /* ref={inputRef} */
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {
          error !== null && <p style={{ color: 'red' }}>{error}</p>
        }
      </header>

      <main>
        {
          loading === true ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
