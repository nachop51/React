import React from 'react'
import { type TodoType, type TodoID, type TodoList } from '../types'
import Todo from './Todo'

interface Props {
  todos: TodoList
  completeTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  removeTodo: ({ id }: TodoID) => void
}

const Todos: React.FC<Props> = ({ todos, removeTodo, completeTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed !== false ? 'completed' : ''}`}>
            <Todo
              onToggle={completeTodo}
              removeTodo={removeTodo}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default Todos
