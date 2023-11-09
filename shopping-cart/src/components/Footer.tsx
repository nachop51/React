import React from 'react'
import './Footer.css'
// import useFilters from '../hooks/useFilters'
// import { useCart } from '../hooks/useCart'

const Footer = (): JSX.Element => {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Technical interview (React)</h4>
      <span>@nachop51</span>
      <h5>Shopping Cart using useContext & useReducer</h5>
      {/* {
        JSON.stringify(filters, null, 2)
      }
      <br /> */}
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
    </footer>
  )
}

export default Footer
