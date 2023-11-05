import React, { createContext, useState } from 'react'

export const FiltersContext = createContext({
  filters: {
    category: 'all',
    minPrice: 0
  },
  setFilters: (filters: { category: string, minPrice: number }) => { }
})

export const FiltersProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [filters, setFilters] = useState({
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
