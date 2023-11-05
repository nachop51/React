import './Products.css'
import React from 'react'
import { AddToCartIcon } from './Icons'
import { type IProducts } from '../common/interfaces'

interface Props {
  products: IProducts[]
}

const Products = ({ products }: Props): JSX.Element => {
  return (
    <main className='products'>
      <ul>
        {
          products.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
              <img src={thumbnail} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Products
