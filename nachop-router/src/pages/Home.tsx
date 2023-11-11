import { Link } from '../components/Link'

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to='/about'>Go to about</Link>
    </>
  )
}

export default HomePage
