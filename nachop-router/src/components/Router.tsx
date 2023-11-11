import React, { Children, useEffect, useState } from 'react'
import { EVENTS } from '../utils/consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils/getCurrentPath'

interface RouterProps {
  children?: React.ReactNode
  routes?: Array<{
    path: string
    Component: ({ routeParams }: { routeParams?: Record<string, string> }) => JSX.Element
  }>
  defaultComponent?: () => JSX.Element
  routeParams?: Record<string, string>
}

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }: RouterProps): JSX.Element {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = (): void => {
      setCurrentPath(getCurrentPath())
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

  const routesFromChildren = Children.map<React.ReactNode, { props: object, type: { name: string } }>(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })?.filter(Boolean)

  console.log(routesFromChildren)

  const routesToUse = routes.concat(routesFromChildren ?? [])

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (matched === false) return false

    routeParams = matched.params
    return true
  })?.Component ?? DefaultComponent

  return Page !== undefined ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
