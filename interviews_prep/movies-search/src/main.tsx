import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('There is no root element')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
