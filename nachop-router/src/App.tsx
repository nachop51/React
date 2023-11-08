import { useEffect, useState } from 'react'
import { EVENTS } from './consts'

function navigate (href): void {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => { navigate('/about') }}>Go to about</button>
    </>
  )
}

const AboutPage = (): JSX.Element => {
  return (
    <>
      <h1>About page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, atque quis? Aspernatur veritatis officia, voluptatem eligendi provident placeat blanditiis architecto laudantium, cumque odit possimus vel odio alias molestiae fugit ut?</p>
      <button onClick={() => { navigate('/') }}>Go to home</button>
    </>
  )
}

function App (): JSX.Element {
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

  return (
    <>
      <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
      </main>
    </>
  )
}

export default App
