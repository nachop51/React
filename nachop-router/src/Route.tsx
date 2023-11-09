interface RouteProps {
  path: string
  Component: ({ ...props }) => JSX.Element
  routeParams?: Record<string, string>
}

const Route = ({ path, Component }: RouteProps): null => {
  return null
}

export default Route
