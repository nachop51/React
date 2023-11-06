import './Products.css'
import React from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { type IProducts } from '../common/interfaces'
import { useCart } from '../hooks/useCart'

interface Props {
  products: IProducts[]
}

const Products = ({ products }: Props): JSX.Element => {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product: IProducts): boolean => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                    onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default Products
