import { useState } from 'react'
import { type Result } from '../types'
import { unsplashApi } from '../services/unsplash'
import { localApi } from '../services/local'

const useImages = () => {
  const [images, setImages] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)

  const searchImages = ({ query }: { query: string }) => {
    setLoading(true)
    // unsplashApi({ query })
    //   .then(data => { setImages(data) })
    //   .catch(err => { console.error(err) })
    //   .finally(() => { setLoading(false) })
    localApi({ query })
      .then(data => { setImages(data) })
      .catch(err => { console.error(err) })
      .finally(() => { setLoading(false) })
  }

  return { images, searchImages, loading }
}

export default useImages
