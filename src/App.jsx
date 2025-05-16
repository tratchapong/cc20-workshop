import Header from "./components/Header"
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // cart = { id, price, title, quantity}

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  useEffect( ()=>{
    fetchProducts()
  },[])
  // ถ้า add สินค้าเดิมซ้ำให้เพิ่มจำนวนแทน..
  const addToCart = (id, title, price) => {
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    let newItem
    if(idx === -1) {
      newItem = { id: id, title: title, price: price, quantity : 1}
      setCarts([...carts, newItem])
    }else {
      const clonedCart = [...carts]
      clonedCart[idx].quantity += 1
      setCarts(clonedCart)
    }
    
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length}/>
      <div className="flex flex-1">
        <ProductList products={products} addToCart={addToCart}/>
        <CartSummary carts={carts} />
      </div>
    </div>
  )
}

export default App
