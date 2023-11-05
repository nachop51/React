import { useContext } from 'react'
import { type IProducts } from '../common/interfaces'
import { FiltersContext } from '../context/filters'

interface returnValue {
  filters: {
    category: string
    minPrice: number
  }
  filterProducts: (products: IProducts[]) => IProducts[]
  setFilters: (filters: { category: string, minPrice: number }) => void
}

const useFilters = (): returnValue => {
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
