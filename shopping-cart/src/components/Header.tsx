import React from 'react'
import Filters from './Filters'

export function Header (): JSX.Element {
  return (
    <header>
      <h1>
        React Shop 🛒
      </h1>
      <Filters />
    </header>
  )
}
