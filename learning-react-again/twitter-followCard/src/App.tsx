import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const users = [
  {
    username: 'nachop51',
    name: 'Nacho Peralta',
    isFollowing: false,
  },
  {
    username: 'vandriodd',
    name: 'Luz',
    isFollowing: true,
  },
  {
    username: 'julian',
    name: 'Julian',
    isFollowing: false,
  },
  {
    username: 'miguel',
    name: 'Miguel',
    isFollowing: true,
  },
]

const App = () => {
  // functions can be passed as props
  const addAt = (username: string) => `@${username}`

  const renderedUsers = users.map(({ username, name, isFollowing }) => (
    <TwitterFollowCard
      key={username}
      formatUsername={addAt}
      name={name}
      username={username}
      initialIsFollowing={isFollowing}
    />
  ))

  return <div className="app">{renderedUsers}</div>
}

export default App
