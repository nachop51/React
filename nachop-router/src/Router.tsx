import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

interface RouterProps {
  children?: React.ReactNode
  routes?: Array<{
    path: string
    Component: () => JSX.Element
  }>
  defaultComponent?: () => JSX.Element
  routeParams?: Record<string, string>
}

export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }: RouterProps): JSX.Element {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = (): void => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    // This is needed for the back button to work
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    // This could also be triggered by window.history.back()

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  })

  let routeParams = {}

  type Route = {
    path: string
    Component: () => JSX.Element
  } | null

  const routesFromChildren: Route = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })?.filter(Boolean)

  const routesToUse = routes.concat(routesFromChildren ?? [])

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component ?? DefaultComponent

  return <Page routeParams={routeParams} />
}
