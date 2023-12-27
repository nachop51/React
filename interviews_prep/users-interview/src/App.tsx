import { useEffect, useMemo, useRef, useState } from 'react'
import { SortBy, type ApiResults, type User } from './types.d'
import './App.css'
import UserTable from './componets/UserTable'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [colored, setColored] = useState(false)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  useEffect(() => {
    fetch('http://randomuser.me/api/?results=100')
      .then(async res => await res.json() as ApiResults)
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch(err => { console.log(err) })
  }, [])

  const handleReset = () => { setUsers(originalUsers.current) }

  const toggleSortByCountry = () => {
    setSorting(prev => prev === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE)
  }

  const handleDelete = (email: string) => {
    setUsers(prev => {
      return prev.filter((user) => user.email !== email)
    })
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).toLowerCase().localeCompare(extractProperty(b).toLowerCase())
    })
  }, [filteredUsers, sorting])

  return (
    <div className='app'>
      <h1>Technical test</h1>
      <button onClick={() => { setColored(!colored) }}>Toggle colors</button>
      <button onClick={() => { toggleSortByCountry() }}>Sort By Country</button>
      <button onClick={() => { handleReset() }}>Reset users</button>
      <input
        type='text' placeholder='Filter by country' onChange={(e) => {
          setFilterCountry(e.target.value)
        }}
      />
      <UserTable users={sortedUsers} colored={colored} deleteUser={handleDelete} changeSorting={handleChangeSort} />
    </div>
  )
}

export default App
