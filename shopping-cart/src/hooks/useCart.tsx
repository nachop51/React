import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { type ICartContext } from '../common/interfaces'

export const useCart = (): ICartContext => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
