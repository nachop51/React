import useFilters from '../hooks/useFilters'
import './Filters.css'
import React, { useId } from 'react'

const Filters = (): JSX.Element => {
  const { filters, setFilters } = useFilters()

  const minPriceId = useId()
  const categoryId = useId()

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceId}>Price</label>
        <input type='range' name='price' id={minPriceId} min={0} max={2000} onChange={handleChangePrice} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select onChange={handleChangeCategory} name='category' id={categoryId}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
