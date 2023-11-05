import React from 'react'
import './Footer.css'
import useFilters from '../hooks/useFilters'

const Footer = (): JSX.Element => {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {/* <h4>Technical interview (React)</h4>
      <span>@nachop51</span>
      <h5>Shopping Cart using useContext & useReducer</h5> */}
      {
        JSON.stringify(filters)
      }
    </footer>
  )
}

export default Footer
