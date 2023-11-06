import { createContext, useState } from 'react'
import { type ICartContext, type IProducts } from '../common/interfaces'

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: (product: IProducts): void => { },
  removeFromCart: (product: IProducts): void => { },
  clearCart: (): void => { }
})

export function CartProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [cart, setCart] = useState<IProducts[]>([])

  const addToCart = (product: IProducts): void => {
    const productInCartIndex = cart.findIndex(({ id }) => id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)

      newCart[productInCartIndex].quantity = 1 + (newCart[productInCartIndex].quantity ?? 0)

      setCart(newCart)
    } else {
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ]))
    }
  }
  const clearCart = (): void => {
    setCart([])
  }

  const removeFromCart = (product: IProducts): void => {
    const filtered = cart.filter((item) => item.id !== product.id)
    setCart(filtered)

    // ^ This way can cause a race condition

    // This may be a better approach to removing an item from the cart
    setCart(prevState => prevState.filter((item) => item.id !== product.id))
    // we ensure that we are using the latest state

    // another way
    // const prodIndex = cart.findIndex((item) => item.id === product.id)

    // if (prodIndex >= 0) {
    //   const newCart = structuredClone(cart)

    //   newCart.splice(prodIndex, 1)

    //   setCart(newCart)
    // }
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
