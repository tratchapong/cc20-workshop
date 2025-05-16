import Header from "./components/Header"
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  useEffect( ()=>{
    fetchProducts()
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length}/>
      <div className="flex flex-1">
        <ProductList products={products}/>
        <CartSummary carts={carts} />
      </div>
    </div>
  )
}

export default App
