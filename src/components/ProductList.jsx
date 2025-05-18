import { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const { products, addToCart, carts, removeFromCart} = props
  const selected = carts.map(el => el.id)
  console.log(products[0])
  return (
    <div className='w-2/3 bg-amber-200 ps-8 overflow-auto'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Product List</h2>
      <div className="flex gap-3 flex-wrap">
        {products.length && products.map(el => (
          <ProductCard key={el.id} productItem={el} addToCart={addToCart} 
          haveSelected={selected.includes(el.id)} removeFromCart={removeFromCart}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList