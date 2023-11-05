import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { FiltersProvider } from './context/filters.tsx'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
