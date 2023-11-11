import React from 'react'
import { type TodoID, type TodoType } from '../types'

interface Props extends TodoType {
  onToggle: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  removeTodo: ({ id }: TodoID) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, removeTodo, onToggle }) => {
  const handleRemove = (): void => {
    removeTodo({ id })
  }

  const handleToggle = (): void => {
    onToggle({ id, completed: !completed })
  }

  return (
    <div className='view'>
      <input type='checkbox' checked={completed} onChange={handleToggle} className='toggle' />
      <label>{title}</label>
      <button className='destroy' onClick={handleRemove} />
    </div>
  )
}

export default Todo
