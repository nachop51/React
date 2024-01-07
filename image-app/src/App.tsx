import { LoadingIcon } from './componets/Icons'
import SearchBar from './componets/SearchBar'
import ImageList from './componets/ImageList'
import useImages from './hooks/useImages'
import useSEO from './hooks/useSEO'

interface AppProps {
  title: string
  description?: string
}

const App: React.FC<AppProps> = ({ title, description }) => {
  const { images, searchImages, loading } = useImages()
  useSEO({ title, description })

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
