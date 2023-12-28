import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const element = document.getElementById('root')

if (element == null) {
  throw new Error('Root element not found')
}

const client = new QueryClient()

ReactDOM.createRoot(element).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)
