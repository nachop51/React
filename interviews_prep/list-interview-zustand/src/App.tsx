import { useState } from 'react'
import './App.css'
import List from './components/List'
import { useListStore } from './store/list'
import Footer from './components/Footer'
import { Filters } from './constants'

function App () {
  const list = useListStore((state) => state.list)
  const filter = useListStore(state => state.filter)
  const add = useListStore(state => state.add)
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    add(input)
    setInput('')
  }

  const filteredList = list.filter(item => {
    switch (filter) {
      case Filters.ALL:
        return true
      case Filters.COMPLETED:
        return item.done
      case Filters.PENDING:
        return !item.done
      default:
        return true
    }
  })

  return (
    <>
      <h1>Test</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={e => { setInput(e.target.value) }} />
      </form>
      <List list={filteredList} />
      <Footer />
    </>
  )
}

export default App
