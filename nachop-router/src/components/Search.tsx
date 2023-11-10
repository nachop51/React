const SearchPage = ({ routeParams }: { routeParams?: Record<string, string> }): JSX.Element => {
  return (
    <h1>You have searched for: {routeParams?.query}</h1>
  )
}

export default SearchPage
