import React from 'react'
import Products from './components/Products'
import { products } from './mocks/products.json'

function App (): JSX.Element {
  return (
    <>
      <h1>
        Shoping Cart
      </h1>
      <Products products={products} />
    </>
  )
}

export default App
