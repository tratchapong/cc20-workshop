import Header from "./components/Header"
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import { useEffect, useState } from "react"
// import {products} from './assets/db/products.json'

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [error, setError] = useState(null)

  // cart = { id, price, title, quantity}

  // const fetchProducts = () => {
  //   fetch('http://localhost:8000/products')
  //     .then(resp => resp.json())
  //     .then(data => setProducts(data))
  // }

  const fetchProducts = () => {
    fetch('./db/products.json')
      .then(resp => resp.json())
      .then(data => setProducts(data.products))
      .catch(err => setError(err))
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  // ถ้า add สินค้าเดิมซ้ำให้เพิ่มจำนวนแทน..
  const addToCart = (id, title, price) => {
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    let newItem
    if (idx === -1) {
      newItem = { id: id, title: title, price: price, quantity: 1 }
      setCarts([...carts, newItem])
    } else {
      const clonedCart = [...carts]
      clonedCart[idx].quantity += 1
      setCarts(clonedCart)
    }
  }

  const decQuantity = (id) => {
    // ลดจำนวน Quantity ของ item ใน cart
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    const clonedCart = [...carts]
    if (clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -= 1
    } else {
      clonedCart.splice(idx, 1)
    }
    setCarts(clonedCart)
  }

  const removeFromCart = id => {
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    const clonedCart = [...carts]
    clonedCart.splice(idx, 1)
    setCarts(clonedCart)
  }

  if(error) {
    return <div className="text-5xl">Error : {error}</div>
  }

  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto">
      <Header itemCount={carts.length} />
      <div className="flex h-11/12">
        {products.length && (
          <ProductList products={products} addToCart={addToCart} carts={carts} removeFromCart={removeFromCart}/>
        )}
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default App
