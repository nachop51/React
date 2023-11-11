import { type TODO_FILTERS } from './consts'

export interface TodoType {
  id: string
  title: string
  completed: boolean
}

// export type TodoTitle = Todo['title']
export type TodoID = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export type TodoList = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
