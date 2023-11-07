import { useId } from 'react'
import './Cart.css'
import { AddToCartIcon, CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { type IProducts } from '../common/interfaces'

const CartItem = ({ product, addToCart, removeFromCart }: { product: IProducts, addToCart: () => void, removeFromCart: () => void }): JSX.Element => {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>
          Qty: {product.quantity}
        </small>
        <button onClick={addToCart}>
          <AddToCartIcon />
        </button>
        <button onClick={removeFromCart}>
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>
  )
}

const Cart = (): JSX.Element => {
  const cartCheckBoxId = useId()
  const { cart, removeFromCart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.length === 0
              ? <li>Cart is empty</li>
              : cart.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  addToCart={() => { addToCart(product) }}
                  removeFromCart={() => { removeFromCart(product) }}
                />
              ))
          }
        </ul>
        <button onClick={() => { clearCart() }}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
