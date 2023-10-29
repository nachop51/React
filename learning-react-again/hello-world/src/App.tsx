import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const App = () => {
  return (
    <div className="app">
      <TwitterFollowCard
        name="Nacho Peralta"
        username="nachop51"
        isFollowing={false}
      />
      <TwitterFollowCard name="Luz" username="vandriodd" isFollowing={false} />
    </div>
  )
}

export default App
