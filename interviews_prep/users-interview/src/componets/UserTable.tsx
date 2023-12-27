import { SortBy } from '../types.d'
import type { User } from '../types.d'

interface Props {
  users: User[]
  colored: boolean
  deleteUser: (email: string) => void
  changeSorting: (sort: SortBy) => void
}

const UserTable = ({ users, colored, deleteUser, changeSorting }: Props) => {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Photo</th>
          <th style={{ cursor: 'crosshair' }} onClick={() => { changeSorting(SortBy.NAME) }}>First Name</th>
          <th style={{ cursor: 'crosshair' }} onClick={() => { changeSorting(SortBy.LAST) }}>Last Name</th>
          <th style={{ cursor: 'crosshair' }} onClick={() => { changeSorting(SortBy.COUNTRY) }}>Contry</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            const bgColor = index % 2 === 0 ? '#333' : '#555'
            const color = colored ? bgColor : 'transparent'

            return (
              <tr key={user.email} style={{ background: color }}>
                <td>
                  <img src={user.picture.thumbnail} alt={user.name.first} />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => { deleteUser(user.email) }}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default UserTable
