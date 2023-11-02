import { useState, useEffect } from 'react'

const CAT_IMAGE_URL = 'https://cataas.com'

const useCatImage = ({ fact }) => {
  const [catImage, setCatImage] = useState(null)

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
  //
  //       if (!res.ok) throw new Error('Error while fetching from cat image API')
  //
  //       const data = await res.json()
  //
  //       setCatImage(`https://cataas.com/${data._id}`)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fecthCatImage()
  // }, [fact])

  return { catImage }
}

export default useCatImage
