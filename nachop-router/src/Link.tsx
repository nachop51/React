import React from 'react'
import { EVENTS } from './consts'

export function navigate (href: string): void {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

interface LinkProps {
  target?: string
  to: string
  children: React.ReactNode
}

export function Link ({ target, to, ...props }: LinkProps): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const isMainEvent = e.button === 0 // primary click
    const isModifierEvent = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey // modifier key
    const isManageableEvent = target === undefined || target === '_self' // target is not set or is set to _self

    if (isMainEvent && isManageableEvent && !isModifierEvent) {
      e.preventDefault()
      navigate(to) // SPA navigation
    }
  }

  return (
    <a href={to} onClick={handleClick} target={target} {...props} />
  )
}
