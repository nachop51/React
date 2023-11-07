import React, { createContext, useState } from 'react'
import { type IFilters } from '../common/interfaces'

export const FiltersContext = createContext<IFilters | null>(null)

export const FiltersProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [filters, setFilters] = useState<{ category: string, minPrice: number }>({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
