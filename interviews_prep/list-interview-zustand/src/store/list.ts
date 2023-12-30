import { create } from 'zustand'
import { type FilterValue, type ListItemType } from '../types.d'
import { persist } from 'zustand/middleware'

interface ListStore {
  list: ListItemType[]
  filter: FilterValue
  add: (name: string) => void
  remove: (id: number) => void
  clear: () => void
  toggle: (id: number) => void
  rename: (id: number, name: string) => void
  move: (id: number, to: number) => void
  filterBy: (filter: FilterValue) => void
}

export const useListStore = create<ListStore>()(persist((set, get) => ({
  list: [],
  filter: 'all',

  add (name) {
    const newItem = {
      id: get().list.length + 1,
      name,
      done: false,
      date: new Date(),
      position: get().list.length + 1
    }

    set({ list: [...get().list, newItem] })
  },

  remove (id) {
    set(state => {
      const newList = state.list.filter(i => i.id !== id)

      return {
        list: newList
      }
    })
  },

  clear () {
    set({ list: [] })
  },

  toggle (id) {
    set(state => {
      return {
        list: state.list.map(i => {
          if (id === i.id) {
            return {
              ...i,
              done: !i.done
            }
          }

          return i
        })
      }
    })
  },

  rename (id, name) {
    set(state => {
      return {
        list: state.list.map(i => {
          if (id === i.id) {
            return {
              ...i,
              name
            }
          }

          return i
        })
      }
    })
  },

  move (id, to) {
    set(state => {
      const newList = state.list.map(i => {
        if (id === i.id) {
          return {
            ...i,
            position: to
          }
        }

        return i
      })

      return {
        list: newList.sort((a, b) => a.position - b.position)
      }
    })
  },

  filterBy (filter) {
    set({ filter })
  }

}), {
  name: 'list-storage'
}))
