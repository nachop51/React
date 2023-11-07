import { useReducer } from 'react'
import { type ICartContext, type IProducts } from '../common/interfaces'
import { cartReducer, initialState } from '../reducers/cart'

const useCartReducer = (): ICartContext => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: IProducts): void => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (product: IProducts): void => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const clearCart = (): void => {
    dispatch({ type: 'CLEAR_CART', payload: null })
  }

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

export default useCartReducer
