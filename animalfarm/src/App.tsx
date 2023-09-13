import { useEffect, useState } from "react"
import "./App.css"

type Animal = {
  id: string
  name: string
  type: string
  age: number
}

const useAnimalSearch = () => {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery') || ''
    search(lastQuery)
  }, [])

  const search = async (q: string) => {
    try {
      const res = await fetch(`http://localhost:3001/?q=${q}`)
      const data: Animal[] = await res.json()
      if (res.ok) setAnimals(data)
    } catch (err) {
      console.error(err)
    }
    localStorage.setItem('lastQuery', q)
  }

  return { animals, search }
}

const AnimalItem = ({ name, type, age }: Animal) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{type} - {age}</p>
    </li>
  )
}

function App() {

  const { animals, search } = useAnimalSearch()

  const renderedList = animals.map((animal) => (
    <AnimalItem key={animal.id} {...animal} />
  ))

  return (
    <main>
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => search(e.target.value)}
      />
      <ul>{renderedList?.length !== 0 ? renderedList : <h2>No animals found</h2>}</ul>
    </main>
  )
}

export default App
