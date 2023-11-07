import { useContext } from 'react'
import { type IFilters, type IProducts } from '../common/interfaces'
import { FiltersContext } from '../context/filters'

const useFilters = (): IFilters => {
  const context = useContext(FiltersContext)

  if (context === undefined || context === null) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  // console.log(filters)

  const filterProducts = (products: IProducts[]): IProducts[] => {
    return products.filter((product) => {
      return product.price >= parseInt(context.filters.minPrice as string) &&
        (
          context?.filters.category === 'all' ||
          product.category === context?.filters.category
        )
    })
  }

  return { filters: context.filters, filterProducts, setFilters: context.setFilters }
}

export default useFilters
