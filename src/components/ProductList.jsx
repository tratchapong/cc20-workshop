import { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const { products, addToCart, carts, removeFromCart } = props
  const selected = carts.map(el => el.id)
  const allTags = Array.from(products.reduce((a, c) => a.add(c.category), new Set()))

  // const [showProduct, setShowProduct] = useState([])

  const [filterText, setFilterText] = useState('')

  const showProduct = products.filter(el => filterText===''? true : el.category === filterText)
  return (
    <div className='w-2/3 bg-amber-200 ps-8 overflow-auto'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Product List</h2>
      <div className="join mb-2">
        {allTags.map(el => (
          <button key={el} className={ `btn btn-sm btn-info join-item ${filterText===el ? 'scale-110': 'btn-outline opacity-80'}` }
            onClick={()=>setFilterText(el)}>{el}</button>
        ))}
          <button className={ `btn btn-sm btn-info join-item ${filterText==='' ? 'scale-110': 'btn-outline opacity-80'}` }
            onClick={()=>setFilterText('')}>All</button>
      </div>
      <div className="flex gap-3 flex-wrap">
        {showProduct.map(el => (
          <ProductCard key={el.id} productItem={el} addToCart={addToCart}
            haveSelected={selected.includes(el.id)} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList