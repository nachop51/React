import { type Filters } from './constants'

export interface ListItemType {
  id: number
  name: string
  done: boolean
  date: Date
  position: number
}

export type FilterValue = typeof Filters[keyof typeof Filters]
