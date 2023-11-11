import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoType, type TodoID, type FilterValue, type TodoTitle } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: true
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
  {
    id: '4',
    title: 'todo 4',
    completed: true
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterChange] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    }))
  }

  const handleRemove = ({ id }: TodoID): void => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const handleFliterChange = (filter: FilterValue): void => {
    setFilterChange(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }

    return true
  })

  const onAddTodo = ({ title }: TodoTitle): void => {
    setTodos(prevState => [...prevState, {
      title,
      id: crypto.randomUUID(),
      completed: false
    }])
  }

  return (
    <div className='todoapp'>
      <Header handleAddTodo={onAddTodo} />
      <Todos todos={filteredTodos} completeTodo={handleComplete} removeTodo={handleRemove} />
      <Footer
        activeCount={todos.filter(todo => !todo.completed).length}
        completedCount={todos.filter(todo => todo.completed).length}
        onClearCompleted={() => { setTodos(prevState => prevState.filter(todo => !todo.completed)) }}
        filterSelected={filterSelected}
        handleFilterChange={handleFliterChange}
      />
    </div>
  )
}

export default App
