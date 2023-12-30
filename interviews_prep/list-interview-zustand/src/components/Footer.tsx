import { Filters } from '../constants'
import { useListStore } from '../store/list'
import FilterBy from './FilterBy'

const Footer = () => {
  const list = useListStore(state => state.list)
  const filter = useListStore(state => state.filter)
  const clearItems = useListStore(state => state.clear)

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all tasks?')) {
      clearItems()
    }
  }

  const completed = list.filter(item => item.done).length

  const getInfo = () => {
    if (filter === Filters.ALL) {
      return `☑️ ${completed} - ✖️ ${list.length - completed} - 📝 ${list.length}`
    } else if (filter === Filters.COMPLETED) {
      return `☑️ ${completed}`
    } else {
      return `✖️ ${list.length - completed}`
    }
  }

  return (
    <footer>
      {getInfo()}
      <FilterBy />
      <button
        onClick={handleClear}
        disabled={list.length === 0}
      >
        Clear all tasks
      </button>
    </footer>
  )
}

export default Footer
