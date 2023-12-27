import { useEffect, useState } from 'react'
import { type ApiResults, type User } from './types.d'
import './App.css'
import UserTable from './componets/UserTable'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [colored, setColored] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  useEffect(() => {
    fetch('http://randomuser.me/api/?results=100')
      .then(async res => await res.json() as ApiResults)
      .then(data => { setUsers(data.results) })
      .catch(err => { console.log(err) })
  }, [])

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users

  return (
    <div className='app'>
      <h1>Technical test</h1>
      <button onClick={() => { setColored(!colored) }}>Toggle colors</button>
      <button onClick={() => { setSortByCountry(prev => !prev) }}>Sort By Country</button>
      <UserTable users={sortedUsers} colored={colored} />
    </div>
  )
}

export default App
