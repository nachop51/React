import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')

if (root == null) {
  throw new Error('Root element is null')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App title='Images searcher' description='Search for images' />
  </React.StrictMode>
)
