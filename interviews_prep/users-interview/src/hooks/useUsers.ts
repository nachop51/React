import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/randomUsers'
import { type User } from '../types'

export const useUsers = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } = useInfiniteQuery<{ users: User[], page?: number }>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3
  })

  return {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    users: data?.pages?.flatMap(page => page.users) ?? []
  }
}
