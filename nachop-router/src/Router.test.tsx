import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from './components/Router.tsx'
import { getCurrentPath } from './utils/getCurrentPath.ts'
import { Route } from './components/Route.tsx'
import { Link } from './components/Link.tsx'

vi.mock('./utils/getCurrentPath.ts', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', async () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should be true', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 when no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(document.body.innerHTML).toMatch(/404/)

    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the first matching route', () => {
    getCurrentPath.mockReturnValue('/about')
    render(
      <Router
        routes={[
          {
            path: '/',
            Component: () => <h1>Home</h1>
          },
          {
            path: '/about',
            Component: () => <h1>About</h1>
          }
        ]}
      />
    )
    expect(document.body.innerHTML).toMatch(/About/)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    render(
      <Router>
        <Route
          path='/' Component={() => (
            <>
              <h1>Home</h1>
              <Link to='/about'>Go to About</Link>
            </>)}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
