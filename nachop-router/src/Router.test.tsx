import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Router from './Router'
import { getCurrentPath } from './utils.ts'

vi.mock('utils.ts', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
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

  // it('should render the first matching route', () => {
  //   getCurrentPath.mockReturnValue('/about')
  //   render(
  //     <Router
  //       routes={[
  //         {
  //           path: '/',
  //           Component: () => <h1>Home</h1>
  //         },
  //         {
  //           path: '/about',
  //           Component: () => <h1>About</h1>
  //         }
  //       ]}
  //     />
  //   )
  //   expect(document.body.innerHTML).toMatch(/Home/)
  //   expect(screen.getByText('About')).toBeTruthy()
  // })
})
