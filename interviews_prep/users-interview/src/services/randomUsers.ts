import { type User, type ApiResults } from '../types'
import { type QueryKey, type QueryFunction } from '@tanstack/react-query'

export const fetchUsers: QueryFunction<{ users: User[], page?: number }, QueryKey, unknown> = async ({ pageParam = 1 }) => {
  return await fetch(`http://randomuser.me/api/?results=10&seed=nachop51&page=${pageParam as number}`)
    .then(async res => {
      if (!res.ok) throw new Error('Something went wrong')
      return await res.json() as ApiResults
    })
    .then(data => ({
      users: data.results,
      page: data.info.page > 10 ? undefined : data.info.page + 1
    }))
    .catch(async () => {
      console.error('Error fetching users')
      return { users: [] as User[], page: 0 }
    })
}
