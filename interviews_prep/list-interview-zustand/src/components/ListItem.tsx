import { useId, useState } from 'react'
import { useListStore } from '../store/list'
import { type ListItemType } from '../types'

interface ListItemProps {
  item: ListItemType
}

const ListItem = ({ item }: ListItemProps) => {
  const removeItem = useListStore(state => state.remove)
  const renameItem = useListStore(state => state.rename)
  const toggleItem = useListStore(state => state.toggle)

  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(item.name)
  const [checked, setChecked] = useState(item.done)
  const labelId = useId()

  const createHandleDelete = (id: number) => () => {
    removeItem(id)
  }

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    renameItem(item.id, input)
    setIsEditing(false)
  }

  const handleChange = () => {
    toggleItem(item.id)
    setChecked(!checked)
  }

  return (
    <li style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
      {!isEditing
        ? (
          <h3
            style={{ lineHeight: 1 }} onDoubleClick={handleDoubleClick}
          >
            {item.name}
          </h3>)
        : (
          <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={e => { setInput(e.target.value) }} />
          </form>)}
      <label htmlFor={labelId}>
        Done
        <input id={labelId} type='checkbox' checked={checked} onChange={handleChange} />
      </label>
      <button
        onClick={createHandleDelete(item.id)}
        style={{ padding: '.5rem 1.2rem', marginLeft: 'auto' }}
      >Delete
      </button>
    </li>
  )
}

export default ListItem
