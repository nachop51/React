import React, { useState, useEffect } from 'react'

const FollowMouse = (): JSX.Element => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  useEffect(() => {
    const handleMove = (e: MouseEvent): void => {
      const { clientX, clientY } = e

      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('mousemove', handleMove)
    }

    // & To debug this in the browser (chrome), open the console and type:
    // & getEventListeners(document)

    // ^ This is the cleanup function
    // * It gets called before the component is removed from the DOM
    // * and before the useEffect is re-ran
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          background: '#09f',
          width: '40px',
          height: '40px',
          left: '-20px',
          top: '-20px',
          pointerEvents: 'none',
          opacity: 0.8,
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>Mouse follower</h3>
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Disable' : 'Enable'} follow mouse
      </button>
    </main>
  )
}

const App = (): JSX.Element => {
  // const [mounted, setMounted] = useState(true)

  return (
    <>
      {/* <button
        onClick={() => {
          setMounted(!mounted)
        }}
      >
        Toggle mount
      </button> */}
      {/* {mounted && <FollowMouse />} */}
      <FollowMouse />
    </>
  )
}

export default App
