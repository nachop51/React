import { type ListItemType } from '../types'
import ListItem from './ListItem'

interface ListProps {
  list: ListItemType[]
}

const List = ({ list }: ListProps) => {
  return (
    <ul>
      {
        list.map((item) =>
          <ListItem key={item.id} item={item} />
        )
      }
    </ul>
  )
}

export default List
