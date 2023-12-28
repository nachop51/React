import { useMemo, useState } from 'react'
import { SortBy, type User } from './types.d'
import './App.css'
import UserTable from './componets/UserTable'
import { useUsers } from './hooks/useUsers'
import Results from './componets/Results'

const App: React.FC = () => {
  const [colored, setColored] = useState(false)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string>('')

  const { users, isLoading, isError, hasNextPage, fetchNextPage } = useUsers()

  // const originalUsers = useRef<User[]>([])
  // useEffect(() => {
  //   setLoading(true)
  //   setError(false)
  //
  //   fetchUsers(page)
  //     .then((users) => {
  //       setUsers(prev => {
  //         const newUsers = prev.concat(users)
  //         originalUsers.current = newUsers
  //         return newUsers
  //       })
  //     })
  //     .catch(() => {
  //       setError(true)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [page])

  const handleReset = () => { // setUsers(originalUsers.current)
  }

  const toggleSortByCountry = () => {
    setSorting(prev => prev === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE)
  }

  const handleDelete = (email: string) => {
    // setUsers(prev => {
    //   return prev.filter((user) => user.email !== email)
    // })
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry.length > 0
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

    return filteredUsers.toSorted((a: User, b: User) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).toLowerCase().localeCompare(extractProperty(b).toLowerCase())
    })
  }, [filteredUsers, sorting])

  return (
    <div className='app'>
      <header>
        <h1>Technical test</h1>
        <button onClick={() => { setColored(!colored) }}>Toggle colors</button>
        <button onClick={() => { toggleSortByCountry() }}>Sort By Country</button>
        <button onClick={() => { handleReset() }}>Reset users</button>
        <input
          type='text' placeholder='Filter by country' onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        {users.length > 0 && (
          <>
            <Results />
            <UserTable
              users={sortedUsers}
              colored={colored}
              deleteUser={handleDelete}
              changeSorting={handleChangeSort}
            />
          </>)}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading users</p>}
        {!isLoading && !isError && users.length === 0 && <p>Usersn't</p>}
        {!isLoading && !isError && hasNextPage && <button onClick={() => { void fetchNextPage() }}>Load more</button>}
      </main>
    </div>
  )
}

export default App
