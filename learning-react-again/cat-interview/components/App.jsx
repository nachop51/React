import React, { useState, useEffect } from 'react'
import './App.css'

const CAT_FACT_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_URL = 'https://cataas.com'

const App = () => {
  const [fact, setFact] = useState(null)
  const [catImage, setCatImage] = useState(null)

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const res = await fetch(CAT_FACT_URL)

        if (!res.ok) throw new Error('Error while fetching from fact API')

        const data = await res.json()

        setFact(data.fact)
      } catch (err) {
        console.error(err)
      }
    }
    fetchFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')

    setCatImage(`${CAT_IMAGE_URL}/cat/says/${firstThreeWords}`)
  }, [fact])

  // ! This would be logical if the API works as intended.
  // useEffect(() => {
  //   if (fact === null) {
  //     return
  //   }
  //   const fecthCatImage = async () => {
  //     const firstThreeWords = fact.split(' ', 3)
  //     try {
  //       const res = await fetch(
  //         `https://cataas.com/cat/says/${firstThreeWords}?json=true`
  //       )

  //       if (!res.ok) throw new Error('Error while fetching from cat image API')

  //       const data = await res.json()

  //       setCatImage(`https://cataas.com/${data._id}`)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fecthCatImage()
  // }, [fact])

  return (
    <main>
      <h1>Wohooo</h1>
      {fact && catImage && (
        <>
          {fact}
          <img src={catImage} />
        </>
      )}
    </main>
  )
}

export default App
