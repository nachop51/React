import './App.css'
import React from 'react'
import useCatImage from '../hooks/useCatImage'
import useCatFact from '../hooks/useCatFact'

const App = () => {
  const { fact, getFactAndUpdate } = useCatFact()
  const { catImage } = useCatImage({ fact })

  return (
    <main>
      <h1>Wohooo</h1>
      <button onClick={() => getFactAndUpdate()}>Fetch another fact</button>
      {fact && catImage && (
        <>
          <p>{fact}</p>
          <img src={catImage} />
        </>
      )}
    </main>
  )
}

export default App
