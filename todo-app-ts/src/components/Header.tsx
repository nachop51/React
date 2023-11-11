import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  handleAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ handleAddTodo }) => {
  return (
    <header className='header'>
      <h1>
        Todo
      </h1>

      <CreateTodo saveTodo={handleAddTodo} />
    </header>
  )
}
