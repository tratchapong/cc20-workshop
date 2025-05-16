import {useState} from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {products} = props
  console.log(products[0])
  return (
    <div className='w-2/3 bg-blue-400 ps-2'>
      <h2>Product List</h2>
      <div className="flex flex-col gap-3">
      {products.map( el => (
        <ProductCard key={el.id} productItem={el} />
      ))}
      </div>
    </div>
  )
}

export default ProductList