import {useState} from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {products} = props
  
  return (
    <div className='w-2/3 bg-blue-400'>
      <h2>Product List</h2>
      <ProductCard />
      <pre>{JSON.stringify(products,null,2)}</pre>
    </div>
  )
}

export default ProductList