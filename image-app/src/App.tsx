import React, { useEffect } from 'react'
import SearchBar from './componets/SearchBar'
import ImageList from './componets/ImageList'
import useImages from './hooks/useImages'
import { LoadingIcon } from './componets/Icons'

interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => {
  const { images, searchImages, loading } = useImages()

  useEffect(() => {
    document.title = title
  }, [])

  return (
    <main>
      <h1>Image searcher</h1>
      <SearchBar searchImages={searchImages} />
      {
        !loading && images.length === 0 && (
          <p>Search for an image!</p>
        )
      }
      {
        loading
          ? <LoadingIcon />
          : <ImageList images={images} />
      }
    </main>
  )
}

export default App
