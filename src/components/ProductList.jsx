import { useState } from 'react'
import ProductCard from './ProductCard'
import SearchBox from './SearchBox'

function ProductList(props) {
  const { products, addToCart, carts, removeFromCart } = props
  const selected = carts.map(el => el.id)
  const allTags = Array.from(products.reduce((a, c) => a.add(c.category), new Set()))

  // const [showProduct, setShowProduct] = useState([])

  const [filterText, setFilterText] = useState('')
  const [searchText, setSearchText] = useState('')

  const filterProduct = products.filter(el => filterText===''? true : el.category === filterText)
  const showProduct = filterProduct.filter(el => searchText===''? true : el.title.toUpperCase().includes(searchText.toUpperCase()) )
  return (
    <div className='w-2/3 bg-amber-200 ps-8 pt-2 overflow-auto'>
      {/* <h2 className='text-2xl rounded py-2 text-slate-600'>Product List</h2> */}
      <SearchBox searchText={searchText} setSearchText={setSearchText}/>
      <div className="join mb-2">
        {allTags.map(el => (
          <button key={el} className={ `btn btn-sm btn-info join-item ${filterText===el ? 'scale-110': 'btn-outline opacity-80'}` }
            onClick={()=>setFilterText(el)}>{el}</button>
        ))}
          <button className={ `btn btn-sm btn-info join-item ${filterText==='' ? 'scale-110': 'btn-outline opacity-80'}` }
            onClick={()=>setFilterText('')}>All</button>
      </div>
      <div className="flex gap-3 flex-wrap pt-2">
        {showProduct.map(el => (
          <ProductCard key={el.id} productItem={el} addToCart={addToCart}
            haveSelected={selected.includes(el.id)} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList