import { type User } from '../types'

const UserTable = ({ users, colored }: { users: User[], colored: boolean }) => {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contry</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            const bgColor = index % 2 === 0 ? '#333' : '#555'
            const color = colored ? bgColor : 'transparent'

            return (
              <tr key={index} style={{ background: color }}>
                <td>
                  <img src={user.picture.thumbnail} alt={user.name.first} />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
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
