import { Filters } from '../constants'
import { useListStore } from '../store/list'
import { type FilterValue } from '../types'

const FilterBy = () => {
  const changeFilter = useListStore(state => state.filterBy)

  const createHandleClick = (filter: FilterValue) => () => {
    changeFilter(filter)
  }

  return (
    <div>
      {Object.entries(Filters).map(([key, value]) => (
        <button
          key={key}
          onClick={createHandleClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default FilterBy
