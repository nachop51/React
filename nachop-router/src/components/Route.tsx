interface RouteProps {
  path: string
  Component: ({ ...props }) => JSX.Element
  routeParams?: Record<string, string>
}

export const Route = ({ path, Component }: RouteProps): null => {
  return null
}
