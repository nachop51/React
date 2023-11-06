import { useContext } from 'react'
import { type IFilters, type IProducts } from '../common/interfaces'
import { FiltersContext } from '../context/filters'

const useFilters = (): IFilters => {
  const { filters, setFilters } = useContext(FiltersContext)

  // console.log(filters)

  const filterProducts = (products: IProducts[]): IProducts[] => {
    return products.filter((product) => {
      return product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
    })
  }

  return { filters, filterProducts, setFilters }
}

export default useFilters
